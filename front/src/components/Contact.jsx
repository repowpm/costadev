import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCheckCircle, FaTimesCircle, FaSpinner, FaTimes } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur', // Validar cuando el usuario sale del campo
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Desarrollo Web',
    'Diseño UI/UX',
    'Marketing Digital',
    'SEO',
    'Consultoría',
    'Otro'
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Usamos toast.custom para la notificación de carga
    const notification = toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <FaSpinner className="h-10 w-10 text-blue-500 animate-spin" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Un momento, por favor...
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Estamos enviando tu mensaje al equipo. ¡Gracias por tu paciencia!
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      { duration: Infinity } // La mantenemos visible hasta que la actualicemos
    );

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/contact`, data);
      
      // Actualizamos a la notificación de éxito
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <FaCheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    ¡Todo listo! Hemos recibido tu mensaje.
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Un miembro de nuestro equipo se pondrá en contacto contigo muy pronto. ¡Gracias por tu interés en CostaDev!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>
          </div>
        ),
        { id: notification, duration: 6000 } // 6 segundos de duración
      );
      reset();
    } catch (error) {
       // Actualizamos a la notificación de error
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <FaTimesCircle className="h-10 w-10 text-red-500" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    ¡Ups! Algo salió mal.
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Parece que hubo un problema técnico. Por favor, inténtalo de nuevo en unos minutos.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>
          </div>
        ),
        { id: notification, duration: 6000 }
      );
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`,
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-indigo-900/60"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¡Hablemos de tu <span className="text-blue-200">Proyecto</span>!
        </h2>
        <p className="text-md md:text-lg text-blue-100 mb-12">
          Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad.
        </p>
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto border border-white/20">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input
                id="name"
                type="text"
                {...register('name', {
                  required: 'El nombre es requerido.',
                  minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres.' },
                  maxLength: { value: 50, message: 'El nombre no puede exceder 50 caracteres.' },
                  pattern: { 
                    value: /^[A-Za-zÀ-ÿ\u00f1\u00d1\s]+$/, 
                    message: "El nombre solo debe contener letras (incluyendo tildes y ñ)." 
                  }
                })}
                className={`w-full p-3 bg-white/90 backdrop-blur-sm rounded-md text-black placeholder:text-gray-500 border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Ej: Juan Pérez"
                onPaste={(e) => {
                  const pastedText = e.clipboardData.getData('text');
                  if (!/^[A-Za-zÀ-ÿ\u00f1\u00d1\s]+$/.test(pastedText)) {
                    e.preventDefault();
                    toast.error('No puedes pegar caracteres especiales en el nombre');
                  }
                }}
              />
              {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'El correo es requerido.',
                  pattern: { 
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                    message: "Por favor ingresa un correo electrónico válido." 
                  },
                  maxLength: { value: 100, message: 'El correo no puede exceder 100 caracteres.' }
                })}
                className={`w-full p-3 bg-white/90 backdrop-blur-sm rounded-md text-black placeholder:text-gray-500 border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="tu.correo@ejemplo.com"
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input
                id="phone"
                type="tel"
                {...register('phone', {
                  required: 'El teléfono es requerido.',
                  minLength: { value: 8, message: 'El teléfono debe tener al menos 8 dígitos.' },
                  maxLength: { value: 15, message: 'El teléfono no puede exceder 15 dígitos.' },
                  pattern: { 
                    value: /^[0-9]+$/, 
                    message: "El teléfono solo debe contener números." 
                  }
                })}
                className={`w-full p-3 bg-white/90 backdrop-blur-sm rounded-md text-black placeholder:text-gray-500 border ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Ej: 1234567890"
                onPaste={(e) => {
                  const pastedText = e.clipboardData.getData('text');
                  if (!/^[0-9]+$/.test(pastedText)) {
                    e.preventDefault();
                    toast.error('No puedes pegar caracteres no numéricos en el teléfono');
                  }
                }}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>}
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Servicio</label>
              <select
                id="service"
                {...register('service', { 
                  required: 'Debes seleccionar un servicio.',
                  validate: value => value !== "" || 'Por favor selecciona un servicio de la lista.'
                })}
                className={`w-full p-3 bg-white/90 backdrop-blur-sm rounded-md text-black border ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Selecciona un servicio...</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              {errors.service && <span className="text-red-500 text-sm mt-1">{errors.service.message}</span>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { 
                  required: 'El mensaje es requerido.',
                  minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres.' },
                  maxLength: { value: 1000, message: 'El mensaje no puede exceder 1000 caracteres.' }
                })}
                className={`w-full p-3 bg-white/90 backdrop-blur-sm rounded-md text-black placeholder:text-gray-500 border ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Hola, me gustaría cotizar un proyecto para..."
                onPaste={(e) => {
                  const pastedText = e.clipboardData.getData('text');
                  if (pastedText.length > 1000) {
                    e.preventDefault();
                    toast.error('El mensaje pegado es demasiado largo');
                  }
                }}
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full btn-primary disabled:opacity-50">
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 