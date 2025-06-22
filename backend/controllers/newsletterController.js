import NewsletterSubscription from '../models/NewsletterSubscription.js';
import nodemailer from 'nodemailer';

// Función para crear transporter de email
const createEmailTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.NEWSLETTER_EMAIL_USER,
      pass: process.env.NEWSLETTER_EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: 'SSLv3'
    },
    socketTimeout: parseInt(process.env.EMAIL_TIMEOUT) || 30000,
    connectionTimeout: parseInt(process.env.EMAIL_TIMEOUT) || 30000,
    greetingTimeout: parseInt(process.env.EMAIL_TIMEOUT) || 30000,
    pool: false,
    maxConnections: 1,
    maxMessages: parseInt(process.env.EMAIL_RATE_LIMIT) || 3,
    rateLimit: parseInt(process.env.EMAIL_RATE_LIMIT) || 3,
    rateDelta: parseInt(process.env.EMAIL_RATE_DELTA) || 1000,
    family: 4, // Forzar IPv4
    debug: process.env.NODE_ENV === 'development',
    logger: process.env.NODE_ENV === 'development'
  });
};

// @desc    Suscribir a un usuario al newsletter
// @route   POST /api/newsletter/subscribe
// @access  Public
export const subscribeToNewsletter = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'El email es requerido.' });
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Por favor, ingresa un email válido.' });
  }

  try {
    const existingSubscription = await NewsletterSubscription.findOne({ email });

    if (existingSubscription) {
      return res.status(409).json({ success: false, message: 'Este email ya está suscrito a nuestro newsletter.' });
    }

    await NewsletterSubscription.create({ email });

    // Enviar email de bienvenida
    try {
      const transporter = createEmailTransporter();

      // Verificar la conexión antes de enviar
      await transporter.verify();
      console.log('✅ Conexión SMTP del newsletter verificada exitosamente');

      await transporter.sendMail({
        from: `"CostaDev Newsletter" <${process.env.NEWSLETTER_EMAIL_USER}>`,
        to: email,
        subject: '¡Bienvenido a nuestro Newsletter! | CostaDev',
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: #ffffff; padding: 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px;">¡Gracias por suscribirte!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Bienvenido a la comunidad CostaDev</p>
            </div>
            <div style="padding: 30px; line-height: 1.6; color: #333333;">
              <p>Hola,</p>
              <p>Te damos la bienvenida a la comunidad de CostaDev. A partir de ahora, recibirás en tu correo nuestras últimas noticias, artículos de interés, casos de estudio y ofertas especiales.</p>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
                <h3 style="color: #1e293b; margin-top: 0;">¿Qué recibirás?</h3>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li>📱 Últimas tendencias en desarrollo web</li>
                  <li>🎨 Tips de diseño UI/UX</li>
                  <li>💼 Casos de estudio exitosos</li>
                  <li>🚀 Ofertas especiales para suscriptores</li>
                  <li>📊 Insights del mundo digital</li>
                </ul>
              </div>
              
              <p>Nos emociona tenerte con nosotros y compartirte contenido de valor sobre el mundo del desarrollo web, diseño y tecnología.</p>
              <p>Si en algún momento deseas cancelar tu suscripción, podrás hacerlo desde un enlace al pie de nuestros correos.</p>
            </div>
            <div style="background-color: #f1f5f9; color: #64748b; padding: 20px; text-align: center; font-size: 12px;">
              <p>Un saludo,<br><strong>El equipo de CostaDev</strong></p>
              <p>&copy; ${new Date().getFullYear()} CostaDev. Todos los derechos reservados.</p>
            </div>
          </div>
        `,
      });
      
      console.log('✅ Email de bienvenida del newsletter enviado exitosamente');
    } catch (emailError) {
      console.error('❌ Error al enviar email de bienvenida:', emailError.message);
      console.error('Detalles del error:', {
        code: emailError.code,
        command: emailError.command,
        response: emailError.response
      });
      // No fallamos la petición principal por un error de email
    }

    res.status(201).json({ 
      success: true, 
      message: '¡Suscripción exitosa! Revisa tu correo para confirmar tu suscripción.' 
    });

  } catch (error) {
    console.error('❌ Error en la suscripción:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Error de validación en el email',
        errors: messages
      });
    }
    
    if (error.code === 11000) {
      return res.status(409).json({ 
        success: false, 
        message: 'Este email ya está suscrito al newsletter.' 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor. Por favor, inténtalo de nuevo.' 
    });
  }
};