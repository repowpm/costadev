import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

// Función para crear transporter de email
const createEmailTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.CONTACT_EMAIL_USER,
      pass: process.env.CONTACT_EMAIL_PASS
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

// @desc    Crear nuevo contacto
// @route   POST /api/contact
// @access  Public
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, service, message, budget, timeline } = req.body;

    // Validar campos requeridos
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Los campos nombre, email, servicio y mensaje son requeridos'
      });
    }

    // Crear el contacto en la base de datos
    const contact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
      budget,
      timeline
    });

    // Intentar enviar emails (pero no fallar si hay error de email)
    try {
      const transporter = createEmailTransporter();

      // Verificar la conexión antes de enviar
      await transporter.verify();
      console.log('✅ Conexión SMTP verificada exitosamente');

      // Enviar email de confirmación al cliente
      const clientMailOptions = {
        from: `"CostaDev" <${process.env.CONTACT_EMAIL_USER}>`,
        to: email,
        subject: 'Hemos recibido tu mensaje | CostaDev',
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: #ffffff; padding: 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px;">¡Gracias por contactarnos, ${name}!</h1>
            </div>
            <div style="padding: 30px; line-height: 1.6; color: #333333;">
              <p>Hola ${name},</p>
              <p>Hemos recibido tu mensaje y queremos confirmarte que nuestro equipo ya lo está revisando. Nos pondremos en contacto contigo a la brevedad posible.</p>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
                <h3 style="color: #1e293b; margin-top: 0;">Resumen de tu consulta:</h3>
                <p><strong>Servicio de interés:</strong> ${service}</p>
                <p><strong>Tu mensaje:</strong></p>
                <p style="font-style: italic; background-color: #f1f5f9; padding: 10px; border-radius: 4px;">"${message}"</p>
                ${budget ? `<p><strong>Presupuesto:</strong> ${budget}</p>` : ''}
                ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
              </div>
              <p>Mientras tanto, te invitamos a explorar nuestro <a href="${process.env.FRONTEND_URL}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">sitio web</a> para conocer más sobre cómo podemos ayudarte a transformar tu visión digital en una realidad.</p>
              <p>¡Hablamos pronto!</p>
            </div>
            <div style="background-color: #f1f5f9; color: #64748b; padding: 20px; text-align: center; font-size: 12px;">
              <p>Atentamente,<br><strong>El equipo de CostaDev</strong></p>
              <p>&copy; ${new Date().getFullYear()} CostaDev. Todos los derechos reservados.</p>
            </div>
          </div>
        `
      };

      // Enviar email de notificación al equipo
      const teamMailOptions = {
        from: `"Notificación CostaDev" <${process.env.CONTACT_EMAIL_USER}>`,
        to: process.env.TEAM_EMAIL,
        subject: `🎯 Nuevo contacto para ${service}: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0;">Nuevo contacto recibido</h2>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
              <h3 style="color: #1e293b; margin-top: 0;">Información del contacto:</h3>
              <div style="background-color: white; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6;">
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
                <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
                <p><strong>Servicio:</strong> <span style="background-color: #dbeafe; color: #1e40af; padding: 2px 8px; border-radius: 12px; font-size: 12px;">${service}</span></p>
                <p><strong>Mensaje:</strong></p>
                <p style="font-style: italic; background-color: #f1f5f9; padding: 10px; border-radius: 4px; margin: 5px 0;">"${message}"</p>
                ${budget ? `<p><strong>Presupuesto:</strong> ${budget}</p>` : ''}
                ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
              </div>
              
              <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
                <p style="color: #64748b; font-size: 12px;">
                  <strong>Fecha:</strong> ${new Date().toLocaleString('es-ES', { 
                    timeZone: 'America/Santiago',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>
        `
      };

      // Enviar emails
      await transporter.sendMail(clientMailOptions);
      console.log('✅ Email de confirmación enviado al cliente');
      
      await transporter.sendMail(teamMailOptions);
      console.log('✅ Email de notificación enviado al equipo');
      
    } catch (emailError) {
      console.error('❌ Error al enviar emails:', emailError.message);
      console.error('Detalles del error:', {
        code: emailError.code,
        command: emailError.command,
        response: emailError.response
      });
      // No fallamos la petición si hay error de email
    }

    res.status(201).json({
      success: true,
      message: 'Mensaje enviado exitosamente. Te contactaremos pronto.',
      data: contact
    });

  } catch (error) {
    console.error('❌ Error al crear contacto:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Error de validación en los datos enviados',
        errors: messages
      });
    }

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Ya existe un contacto con este email'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error interno del servidor. Por favor, inténtalo de nuevo.'
    });
  }
};

// @desc    Obtener todos los contactos (para admin)
// @route   GET /api/contact
// @access  Private
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error al obtener contactos:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
};

// @desc    Actualizar estado del contacto
// @route   PUT /api/contact/:id
// @access  Private
export const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contacto no encontrado'
      });
    }

    res.status(200).json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error al actualizar contacto:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
}; 