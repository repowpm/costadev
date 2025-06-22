import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FaRocket, FaCode, FaPalette, FaChartLine, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Desarrollo Web', 'Diseño UI/UX', 'Marketing Digital', 'Aplicaciones Móviles'],
    loop: true,
    delaySpeed: 2500,
  });

  const particlesInit = useCallback(async (engine) => await loadSlim(engine), []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { icon: FaCode, text: 'Desarrollo Web' },
    { icon: FaPalette, text: 'Diseño UI/UX' },
    { icon: FaChartLine, text: 'Marketing Digital' },
    { icon: FaRocket, text: 'Consultoría IT' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image - Original Colors */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/1.webp')`,
        }}
      >
        {/* No overlay - pure original colors */}
      </div>
      
      {/* 8-bit Pixel Animation Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pixel Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Animated Pixels */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Scanning Line Effect */}
        <motion.div
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{
            top: ['0%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-white/20 to-indigo-50/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'repulse' },
                onClick: { enable: true, mode: 'push' },
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 },
              },
            },
            particles: {
              color: { value: '#3b82f6' },
              links: {
                color: '#3b82f6',
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'bounce' },
                random: false,
                speed: 2,
                straight: false,
              },
              number: { density: { enable: true, area: 800 }, value: 40 },
              opacity: { value: 0.4 },
              shape: { type: 'square' },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          className="group cursor-pointer inline-flex items-center px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-blue-500/50 hover:bg-blue-700/90 hover:border-blue-400/70 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse group-hover:bg-blue-200 transition-colors duration-300"></span>
          Disponible para nuevos proyectos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Transformamos tu{' '}
          <span className="text-blue-600">Visión Digital</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-8 max-w-4xl mx-auto"
        >
          Especialistas en{' '}
          <span className="font-semibold text-white relative">
            {text}
            <Cursor cursorColor="#ffffff" />
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button 
            onClick={scrollToContact} 
            className="group relative overflow-hidden bg-blue-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-500/50 hover:bg-blue-700/90 hover:border-blue-400/70 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Comienza tu Proyecto</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-indigo-500/90"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
          </button>
          
          <button 
            onClick={scrollToNext}
            className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 text-white hover:text-blue-200 transition-all duration-300 bg-blue-600/80 backdrop-blur-sm rounded-lg border border-blue-500/50 hover:bg-blue-700/80 hover:border-blue-400/70 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <span className="relative z-10">Ver Servicios</span>
            <FaArrowDown className="group-hover:translate-y-1 group-hover:scale-110 transition-all duration-300" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-indigo-400/30"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { number: '50+', label: 'Proyectos Completados' },
            { number: '95%', label: 'Satisfacción Cliente' },
            { number: '24/7', label: 'Soporte Técnico' },
            { number: '3+', label: 'Años de Experiencia' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer text-center bg-blue-600/80 backdrop-blur-sm rounded-xl p-4 border border-blue-500/50 hover:bg-blue-700/80 hover:border-blue-400/70 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-200 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 