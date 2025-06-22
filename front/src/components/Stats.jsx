import { useState, useEffect, useRef } from 'react';
import { FaUsers, FaProjectDiagram, FaServer, FaClock, FaGlobe, FaCode, FaSmile, FaRocket } from 'react-icons/fa';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0,
    countries: 0,
    technologies: 0,
    team: 0,
    production: 0
  });
  
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 'projects',
      icon: FaProjectDiagram,
      number: 150,
      suffix: '+',
      label: 'Proyectos Completados',
      description: 'Sitios web, aplicaciones y sistemas',
      color: 'blue'
    },
    {
      id: 'clients',
      icon: FaUsers,
      number: 80,
      suffix: '+',
      label: 'Clientes Satisfechos',
      description: 'Empresas que confían en nosotros',
      color: 'green'
    },
    {
      id: 'experience',
      icon: FaClock,
      number: 8,
      suffix: '+',
      label: 'Años de Experiencia',
      description: 'En desarrollo y diseño digital',
      color: 'purple'
    },
    {
      id: 'satisfaction',
      icon: FaSmile,
      number: 98,
      suffix: '%',
      label: 'Tasa de Satisfacción',
      description: 'Clientes que recomiendan nuestros servicios',
      color: 'yellow'
    },
    {
      id: 'countries',
      icon: FaGlobe,
      number: 15,
      suffix: '+',
      label: 'Países Atendidos',
      description: 'Proyectos internacionales exitosos',
      color: 'indigo'
    },
    {
      id: 'technologies',
      icon: FaCode,
      number: 50,
      suffix: '+',
      label: 'Tecnologías Dominadas',
      description: 'Stack tecnológico completo',
      color: 'red'
    },
    {
      id: 'team',
      icon: FaRocket,
      number: 12,
      suffix: '+',
      label: 'Expertos en el Equipo',
      description: 'Desarrolladores y diseñadores',
      color: 'pink'
    },
    {
      id: 'production',
      icon: FaServer,
      number: 25,
      suffix: '+',
      label: 'Proyectos en Producción',
      description: 'Sistemas activos y funcionando',
      color: 'orange'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 segundos
      const interval = 50; // Actualizar cada 50ms
      const steps = duration / interval;

      stats.forEach((stat) => {
        const targetNumber = stat.number;
        const increment = targetNumber / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= targetNumber) {
            current = targetNumber;
            clearInterval(timer);
          }

          setCounts(prev => ({
            ...prev,
            [stat.id]: Math.floor(current)
          }));
        }, interval);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      red: 'bg-red-100 text-red-600',
      pink: 'bg-pink-100 text-pink-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Números que <span className="text-blue-600">Hablan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre por qué CostaDev es la elección preferida de empresas que buscan transformar su presencia digital
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="text-center group"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${getColorClasses(stat.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-2xl" />
                </div>

                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {counts[stat.id]}
                  <span className="text-blue-600">{stat.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Performance Metrics */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Rendimiento
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tiempo promedio de entrega</span>
                <span className="font-semibold text-green-600">4-6 semanas</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tiempo de respuesta</span>
                <span className="font-semibold text-blue-600">24 horas</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Uptime garantizado</span>
                <span className="font-semibold text-purple-600">99.9%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tasa de reutilización</span>
                <span className="font-semibold text-orange-600">85%</span>
              </div>
            </div>
          </div>

          {/* Client Success */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Éxito del Cliente
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">ROI promedio</span>
                <span className="font-semibold text-green-600">300%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Aumento en conversiones</span>
                <span className="font-semibold text-blue-600">150%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Reducción de costos</span>
                <span className="font-semibold text-purple-600">40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tiempo de carga</span>
                <span className="font-semibold text-orange-600">&lt;3s</span>
              </div>
            </div>
          </div>

          {/* Industry Recognition */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Innovación Tecnológica
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tecnologías emergentes</span>
                <span className="font-semibold text-green-600">15+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">APIs desarrolladas</span>
                <span className="font-semibold text-blue-600">45+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Integraciones</span>
                <span className="font-semibold text-purple-600">30+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Patentes en proceso</span>
                <span className="font-semibold text-orange-600">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para unirte a nuestros clientes exitosos?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Únete a las más de 80 empresas que han transformado su presencia digital con CostaDev
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Comenzar tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 