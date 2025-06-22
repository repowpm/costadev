import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaHeart, FaAward, FaRocket, FaUsers } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "CEO, TechStart",
      company: "TechStart",
      rating: 5,
      text: "CostaDev transformó completamente nuestra presencia digital. En solo 3 meses, nuestro sitio web aumentó las conversiones en un 150%. El equipo es profesional, comunicativo y realmente entiende las necesidades del negocio.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      project: "E-commerce Platform",
      results: "150% aumento en conversiones",
      category: "E-commerce"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "Fundador",
      company: "EcoSolutions",
      rating: 5,
      text: "Increíble experiencia trabajando con CostaDev. Desarrollaron nuestra aplicación móvil desde cero y el resultado superó todas nuestras expectativas. La atención al detalle y la calidad del código son excepcionales.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      project: "Mobile App Development",
      results: "4.8★ rating en App Store",
      category: "Mobile App"
    },
    {
      id: 3,
      name: "Ana Martínez",
      position: "Directora de Marketing",
      company: "RestaurantPro",
      rating: 5,
      text: "El rediseño de nuestro sitio web por CostaDev fue un antes y después para nuestro restaurante. Ahora recibimos 3 veces más reservas online y nuestros clientes nos felicitan por la facilidad de uso.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      project: "Website Redesign",
      results: "300% más reservas online",
      category: "Web Design"
    },
    {
      id: 4,
      name: "Luis Fernández",
      position: "CEO",
      company: "FitnessPro",
      rating: 5,
      text: "CostaDev desarrolló nuestra plataforma de gestión de gimnasios y el impacto fue inmediato. Automatizamos procesos que antes tomaban horas y nuestros clientes están encantados con la nueva experiencia.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      project: "SaaS Platform",
      results: "80% reducción en tiempo de gestión",
      category: "SaaS"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const stats = [
    { icon: FaRocket, number: "50+", label: "Proyectos Completados", color: "from-blue-500 to-cyan-500" },
    { icon: FaHeart, number: "98%", label: "Clientes Satisfechos", color: "from-pink-500 to-rose-500" },
    { icon: FaAward, number: "4.9★", label: "Calificación Promedio", color: "from-yellow-500 to-orange-500" },
    { icon: FaUsers, number: "24/7", label: "Soporte Técnico", color: "from-green-500 to-emerald-500" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Testimonios de Clientes
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre por qué empresas confían en CostaDev para transformar sus ideas en realidad digital
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-3xl shadow-strong p-8 md:p-12 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <FaQuoteLeft className="text-6xl text-blue-100 absolute -top-4 -left-4" />
                
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Client Info */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-shrink-0 text-center lg:text-left w-full lg:w-auto"
                  >
                    <div className="relative inline-block">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 rounded-2xl mx-auto lg:mx-0 mb-4 object-cover shadow-lg"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face';
                        }}
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{testimonials[currentIndex].rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 text-xl mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-blue-600 font-semibold text-sm mb-3">
                      {testimonials[currentIndex].company}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                      ))}
                    </div>

                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {testimonials[currentIndex].category}
                    </span>
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex-1 min-h-[200px] lg:min-h-[180px] flex flex-col justify-between"
                  >
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].text}"
                    </p>
                    
                    {/* Project Results */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>Proyecto:</strong> {testimonials[currentIndex].project}
                          </p>
                          <p className="text-lg text-blue-600 font-bold">
                            {testimonials[currentIndex].results}
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                          <FaAward className="text-white text-xl" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute -left-6 lg:-left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-strong hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
          >
            <FaChevronLeft className="text-gray-600 w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute -right-6 lg:-right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-strong hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
          >
            <FaChevronRight className="text-gray-600 w-5 h-5" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => goToTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <stat.icon className="text-white text-2xl" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 