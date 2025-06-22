import mongoose from 'mongoose';

const newsletterSubscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'El email es requerido'],
    unique: true,
    trim: true,
    lowercase: true,
    maxlength: [100, 'El email no puede exceder 100 caracteres'],
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Por favor ingresa un email válido']
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const NewsletterSubscription = mongoose.model('NewsletterSubscription', newsletterSubscriptionSchema);

export default NewsletterSubscription; 