import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaPalette, 
  FaChartLine, 
  FaSearch, 
  FaUsers, 
  FaRocket,
  FaMobile,
  FaShieldAlt,
  FaLightbulb,
  FaCogs,
  FaGlobe,
  FaHeadset
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, rápidos y responsivos que convierten visitantes en clientes.',
      features: ['React & Next.js', 'Node.js & Express', 'Bases de datos', 'APIs RESTful'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: FaPalette,
      title: 'Diseño UI/UX',
      description: 'Diseños intuitivos y atractivos que mejoran la experiencia del usuario y aumentan la conversión.',
      features: ['Diseño responsivo', 'Prototipado', 'User Research', 'Branding'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      icon: FaChartLine,
      title: 'Marketing Digital',
      description: 'Estrategias de marketing digital que impulsan el crecimiento de tu negocio en línea.',
      features: ['SEO & SEM', 'Redes Sociales', 'Email Marketing', 'Analytics'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      icon: FaSearch,
      title: 'SEO & Posicionamiento',
      description: 'Optimizamos tu sitio web para que aparezca en los primeros resultados de búsqueda.',
      features: ['SEO Técnico', 'Contenido SEO', 'Link Building', 'Local SEO'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
    },
    {
      icon: FaMobile,
      title: 'Apps Móviles',
      description: 'Desarrollamos aplicaciones móviles nativas y multiplataforma que conectan con tu audiencia.',
      features: ['React Native', 'iOS & Android', 'PWA', 'App Store'],
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50',
    },
    {
      icon: FaRocket,
      title: 'Consultoría IT',
      description: 'Asesoramiento estratégico para optimizar tu presencia digital y procesos tecnológicos.',
      features: ['Auditoría Digital', 'Estrategia IT', 'Migración Cloud', 'Optimización'],
      gradient: 'from-teal-500 to-blue-500',
      bgGradient: 'from-teal-50 to-blue-50',
    }
  ];

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Nuestros Servicios
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Soluciones <span className="gradient-text">Digitales</span> Completas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios integrales para hacer crecer tu negocio en el mundo digital, 
            desde el desarrollo web hasta estrategias de marketing avanzadas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title} 
              variants={cardVariants}
              className="group relative"
            >
              <div className={`relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 cursor-pointer overflow-hidden ${service.bgGradient} hover:bg-gradient-to-br`}>
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <motion.div 
                  variants={iconVariants}
                  className={`relative mb-6 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}
                >
                  <service.icon className="text-2xl text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse animation-delay-2000"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas algo más específico?
            </h3>
            <p className="text-gray-600 mb-6">
              Cada proyecto es único. Contáctanos para discutir tus necesidades específicas y crear una solución personalizada.
            </p>
            <button onClick={scrollToContact} className="btn-primary">
              Hablar con un Experto
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 