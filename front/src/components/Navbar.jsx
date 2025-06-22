import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Sobre Nosotros', href: '#about' },
  ];

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-100' 
          : 'bg-white/90 backdrop-blur-sm shadow-md border-b border-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 hover:scale-105 transition-all duration-200 ease-out" onClick={() => scrollToSection('#home')}>
            CostaDev
          </h1>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out hover:scale-105 hover:font-semibold px-3 py-2 rounded-lg hover:bg-blue-50"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')} 
              className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-200 ease-out shadow-md hover:shadow-lg"
            >
              ¡Hablemos!
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm border-t border-blue-100"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 ease-out hover:scale-102 hover:font-semibold"
            >
              {item.name}
            </button>
          ))}
          <div className="p-2">
            <button 
              onClick={() => scrollToSection('#contact')} 
              className="w-full text-sm bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:scale-102 transition-all duration-200 ease-out shadow-md hover:shadow-lg"
            >
              ¡Hablemos!
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 