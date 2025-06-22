import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';

// Cargar variables de entorno desde .env o env.config
if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
  console.log('🔑 Variables de entorno cargadas desde .env');
} else if (fs.existsSync('env.config')) {
  dotenv.config({ path: 'env.config' });
  console.log('🔑 Variables de entorno cargadas desde env.config');
} else {
  dotenv.config();
  console.log('⚠️ No se encontró archivo de entorno personalizado, usando variables por defecto');
}

// Conectar a la base de datos
connectDB();

const app = express();

// Middleware de seguridad
app.use((req, res, next) => {
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('X-Frame-Options', 'DENY');
  res.header('X-XSS-Protection', '1; mode=block');
  next();
});

// Configuración de CORS
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL, 'https://costadev.xyz']
    : [process.env.FRONTEND_URL || 'http://localhost:5173'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Middleware para parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Middleware de logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// Ruta de prueba y health check
app.get('/', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'API de CostaDev funcionando correctamente',
    version: '1.0.0',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// Rutas de la API
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error('❌ Error en el servidor:', err);
  
  // Log detallado en desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.error('Stack trace:', err.stack);
  }

  // Determinar el tipo de error
  let statusCode = 500;
  let message = 'Error interno del servidor';

  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Error de validación en los datos enviados';
  } else if (err.name === 'CastError') {
    statusCode = 400;
    message = 'ID inválido';
  } else if (err.code === 11000) {
    statusCode = 409;
    message = 'Datos duplicados';
  } else if (err.statusCode) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { error: err.message, stack: err.stack })
  });
});

// Manejo de rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada',
    path: req.originalUrl
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log('🚀 Servidor iniciado correctamente');
  console.log(`📍 Puerto: ${PORT}`);
  console.log(`🌍 Entorno: ${process.env.NODE_ENV}`);
  console.log(`📧 Email configurado: ${process.env.CONTACT_EMAIL_USER ? '✅ Sí' : '❌ No'}`);
  console.log(`🗄️  Base de datos: ${process.env.MONGODB_URI ? '✅ Configurada' : '❌ No configurada'}`);
  console.log(`🔗 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
  console.log(`⏰ Iniciado: ${new Date().toLocaleString('es-ES', { timeZone: 'America/Santiago' })}`);
});

// Manejo graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM recibido, cerrando servidor...');
  server.close(() => {
    console.log('✅ Servidor cerrado correctamente');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT recibido, cerrando servidor...');
  server.close(() => {
    console.log('✅ Servidor cerrado correctamente');
    process.exit(0);
  });
});

// Manejo de errores no capturados
process.on('unhandledRejection', (err, promise) => {
  console.error('❌ Unhandled Rejection:', err);
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  server.close(() => {
    process.exit(1);
  });
}); 