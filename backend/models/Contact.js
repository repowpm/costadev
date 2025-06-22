import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es requerido'],
    trim: true,
    minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
    maxlength: [50, 'El nombre no puede exceder 50 caracteres'],
    match: [/^[A-Za-zÀ-ÿ\u00f1\u00d1\s]+$/, 'El nombre solo debe contener letras (incluyendo tildes y ñ)']
  },
  email: {
    type: String,
    required: [true, 'El email es requerido'],
    trim: true,
    lowercase: true,
    maxlength: [100, 'El email no puede exceder 100 caracteres'],
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Por favor ingresa un email válido']
  },
  phone: {
    type: String,
    required: [true, 'El teléfono es requerido'],
    trim: true,
    minlength: [8, 'El teléfono debe tener al menos 8 dígitos'],
    maxlength: [15, 'El teléfono no puede exceder 15 dígitos'],
    match: [/^[0-9]+$/, 'El teléfono solo debe contener números']
  },
  service: {
    type: String,
    required: [true, 'El servicio es requerido'],
    enum: {
      values: ['Desarrollo Web', 'Diseño UI/UX', 'Marketing Digital', 'SEO', 'Consultoría', 'Otro'],
      message: 'Por favor selecciona un servicio válido'
    }
  },
  message: {
    type: String,
    required: [true, 'El mensaje es requerido'],
    trim: true,
    minlength: [10, 'El mensaje debe tener al menos 10 caracteres'],
    maxlength: [1000, 'El mensaje no puede exceder 1000 caracteres']
  },
  budget: {
    type: String,
    enum: {
      values: ['$1,000 - $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000+', 'Por definir'],
      message: 'Por favor selecciona un rango de presupuesto válido'
    }
  },
  timeline: {
    type: String,
    enum: {
      values: ['1-2 semanas', '1 mes', '2-3 meses', '3+ meses', 'Por definir'],
      message: 'Por favor selecciona un timeline válido'
    }
  },
  status: {
    type: String,
    enum: {
      values: ['Nuevo', 'En revisión', 'Contactado', 'Cerrado'],
      message: 'Estado no válido'
    },
    default: 'Nuevo'
  }
}, {
  timestamps: true
});

// Índices para mejorar el rendimiento de las consultas
// contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ createdAt: -1 });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact; 