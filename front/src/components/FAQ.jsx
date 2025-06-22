import { useState } from 'react';
import { FaChevronDown, FaSearch, FaTimes } from 'react-icons/fa';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState(new Set());

  const categories = [
    { id: 'general', name: 'General', color: 'blue' },
    { id: 'servicios', name: 'Servicios', color: 'green' },
    { id: 'precios', name: 'Precios', color: 'purple' },
    { id: 'tecnico', name: 'Técnico', color: 'orange' }
  ];

  const faqs = [
    // General
    {
      id: 1,
      category: 'general',
      question: '¿Qué servicios ofrece CostaDev?',
      answer: 'Ofrecemos desarrollo web completo, aplicaciones móviles, diseño UI/UX, marketing digital, SEO, consultoría tecnológica y mantenimiento de sistemas. Trabajamos con las últimas tecnologías para crear soluciones digitales innovadoras.'
    },
    {
      id: 2,
      category: 'general',
      question: '¿En qué países trabajan?',
      answer: 'Trabajamos con clientes de todo el mundo. Nuestro equipo remoto nos permite ofrecer servicios de alta calidad sin importar la ubicación geográfica. Tenemos experiencia trabajando con empresas de Estados Unidos, Europa, Latinoamérica y Asia.'
    },
    {
      id: 3,
      category: 'general',
      question: '¿Cuál es el tiempo de respuesta para consultas?',
      answer: 'Respondemos a todas las consultas dentro de las 24 horas en días hábiles. Para proyectos urgentes, ofrecemos soporte prioritario con respuesta en menos de 4 horas.'
    },
    {
      id: 4,
      category: 'general',
      question: '¿Ofrecen soporte post-lanzamiento?',
      answer: 'Sí, todos nuestros proyectos incluyen 3 meses de soporte gratuito post-lanzamiento. Después de este período, ofrecemos planes de mantenimiento y soporte continuo para asegurar el funcionamiento óptimo de tu proyecto.'
    },

    // Servicios
    {
      id: 5,
      category: 'servicios',
      question: '¿Qué tecnologías utilizan para el desarrollo web?',
      answer: 'Utilizamos las tecnologías más modernas y confiables: React, Next.js, Vue.js, Node.js, Python, PHP, MySQL, MongoDB, AWS, Google Cloud, y más. Seleccionamos la mejor stack tecnológica según los requerimientos específicos de cada proyecto.'
    },
    {
      id: 6,
      category: 'servicios',
      question: '¿Desarrollan aplicaciones móviles nativas o híbridas?',
      answer: 'Desarrollamos ambos tipos según las necesidades del proyecto. Para aplicaciones que requieren máximo rendimiento, usamos React Native o Flutter. Para aplicaciones más simples, podemos usar soluciones híbridas como Ionic o PWA.'
    },
    {
      id: 7,
      category: 'servicios',
      question: '¿Incluyen SEO en el desarrollo web?',
      answer: 'Sí, todos nuestros sitios web incluyen optimización SEO básica. También ofrecemos servicios de SEO avanzado que incluyen investigación de palabras clave, optimización de contenido, link building y análisis de rendimiento.'
    },
    {
      id: 8,
      category: 'servicios',
      question: '¿Pueden migrar mi sitio web existente?',
      answer: 'Absolutamente. Ofrecemos servicios de migración completa, incluyendo transferencia de contenido, rediseño, optimización de rendimiento y SEO. Evaluamos tu sitio actual y te proporcionamos un plan detallado de migración.'
    },

    // Precios
    {
      id: 9,
      category: 'precios',
      question: '¿Cuál es el rango de precios para un sitio web?',
      answer: 'Los precios varían según la complejidad del proyecto. Un sitio web básico puede costar entre $1,000-$5,000, mientras que proyectos más complejos como e-commerce pueden costar entre $5,000-$25,000. Te proporcionamos un presupuesto detallado sin compromiso.'
    },
    {
      id: 10,
      category: 'precios',
      question: '¿Ofrecen planes de pago flexibles?',
      answer: 'Sí, ofrecemos diferentes opciones de pago: 50% al inicio y 50% al finalizar, pagos mensuales para proyectos grandes, o pagos por fases. Trabajamos contigo para encontrar la opción que mejor se adapte a tu presupuesto.'
    },
    {
      id: 11,
      category: 'precios',
      question: '¿Hay costos ocultos?',
      answer: 'No, somos completamente transparentes con nuestros precios. El presupuesto que te entregamos incluye todo: desarrollo, diseño, pruebas, lanzamiento y 3 meses de soporte. Solo habría costos adicionales si solicitas funcionalidades extra durante el desarrollo.'
    },
    {
      id: 12,
      category: 'precios',
      question: '¿Ofrecen descuentos para startups?',
      answer: 'Sí, tenemos programas especiales para startups y emprendedores. Ofrecemos descuentos del 15-25% para proyectos de startups, además de asesoría gratuita en estrategia digital y recomendaciones de crecimiento.'
    },

    // Técnico
    {
      id: 13,
      category: 'tecnico',
      question: '¿Qué medidas de seguridad implementan?',
      answer: 'Implementamos las mejores prácticas de seguridad: HTTPS obligatorio, validación de datos, protección contra SQL injection, XSS, CSRF, encriptación de datos sensibles, backups automáticos y monitoreo de seguridad 24/7.'
    },
    {
      id: 14,
      category: 'tecnico',
      question: '¿Los sitios web son responsive?',
      answer: 'Sí, todos nuestros sitios web son completamente responsive y se adaptan perfectamente a todos los dispositivos: móviles, tablets y computadoras. Utilizamos diseño mobile-first para garantizar la mejor experiencia de usuario.'
    },
    {
      id: 15,
      category: 'tecnico',
      question: '¿Qué tiempo de carga tienen los sitios web?',
      answer: 'Optimizamos todos nuestros proyectos para tiempos de carga rápidos. Nuestros sitios web típicamente cargan en menos de 3 segundos. Utilizamos técnicas como lazy loading, compresión de imágenes, CDN y optimización de código.'
    },
    {
      id: 16,
      category: 'tecnico',
      question: '¿Pueden integrar APIs de terceros?',
      answer: 'Sí, tenemos experiencia integrando múltiples APIs: pasarelas de pago (Stripe, PayPal), redes sociales, Google Maps, servicios de email, CRM, y más. Evaluamos la mejor opción para tu proyecto y te asesoramos sobre las alternativas disponibles.'
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'general' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas <span className="text-blue-600">Frecuentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios y procesos de trabajo
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar preguntas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <FaChevronDown
                    className={`text-gray-400 transition-transform ${
                      openItems.has(faq.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openItems.has(faq.id) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No encontramos preguntas que coincidan con tu búsqueda.
              </p>
              <button
                onClick={clearSearch}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Limpiar búsqueda
              </button>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No encontraste tu respuesta?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está aquí para ayudarte. Contáctanos y te responderemos en menos de 24 horas.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contactar con nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 