import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode, FaMobile, FaGlobe, FaShoppingCart } from 'react-icons/fa';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'todos', name: 'Todos', icon: FaEye },
    { id: 'web', name: 'Desarrollo Web', icon: FaGlobe },
    { id: 'mobile', name: 'Aplicaciones Móviles', icon: FaMobile },
    { id: 'ecommerce', name: 'E-commerce', icon: FaShoppingCart },
    { id: 'saas', name: 'SaaS', icon: FaCode }
  ];

  const projects = [
    {
      id: 1,
      title: "EcoShop - Plataforma E-commerce",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Plataforma completa de e-commerce con gestión de inventario, pasarelas de pago y panel administrativo.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: ["Carrito de compras", "Gestión de usuarios", "Panel admin", "Analytics"],
      liveUrl: "https://ecoshop.com",
      githubUrl: "https://github.com/costadev/ecoshop",
      results: "200% aumento en ventas online"
    },
    {
      id: 2,
      title: "FitTrack - App de Fitness",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Aplicación móvil para seguimiento de entrenamientos, nutrición y progreso físico.",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      features: ["Tracking de ejercicios", "Plan nutricional", "Progreso visual", "Comunidad"],
      liveUrl: "https://fittrack.app",
      githubUrl: "https://github.com/costadev/fittrack",
      results: "4.8★ en App Store"
    },
    {
      id: 3,
      title: "RestaurantPro - Sistema de Gestión",
      category: "saas",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      description: "SaaS para gestión integral de restaurantes con reservas, inventario y análisis.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker"],
      features: ["Reservas online", "Gestión de mesas", "Inventario", "Reportes"],
      liveUrl: "https://auth-app-fawn-chi.vercel.app/",
      githubUrl: "https://github.com/costadev/restaurantpro",
      results: "300% más reservas"
    },
    {
      id: 4,
      title: "TechCorp - Sitio Corporativo",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Sitio web corporativo moderno con blog integrado y sistema de contacto avanzado.",
      technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
      features: ["Diseño responsive", "SEO optimizado", "Blog integrado", "Formularios"],
      liveUrl: "https://techcorp.com",
      githubUrl: "https://github.com/costadev/techcorp",
      results: "150% más leads"
    },
    {
      id: 5,
      title: "EduLearn - Plataforma Educativa",
      category: "saas",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      description: "Plataforma de aprendizaje online con cursos, videoconferencias y certificaciones.",
      technologies: ["Angular", "Django", "PostgreSQL", "WebRTC", "AWS"],
      features: ["Cursos online", "Videoconferencias", "Certificaciones", "Gamificación"],
      liveUrl: "https://edulearn.com",
      githubUrl: "https://github.com/costadev/edulearn",
      results: "10,000+ estudiantes"
    },
    {
      id: 6,
      title: "HealthCare - App Médica",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      description: "Aplicación móvil para citas médicas, recordatorios y seguimiento de salud.",
      technologies: ["Flutter", "Firebase", "Google Cloud", "Twilio"],
      features: ["Citas online", "Recordatorios", "Historial médico", "Chat médico"],
      liveUrl: "https://healthcare.app",
      githubUrl: "https://github.com/costadev/healthcare",
      results: "50,000+ usuarios"
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre algunos de nuestros proyectos más destacados y cómo hemos ayudado a empresas a alcanzar sus objetivos digitales
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaEye className="text-white text-2xl" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Results */}
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-green-700 text-sm font-medium">
                    {project.results}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Descripción</h3>
                    <p className="text-gray-600 mb-4">
                      {selectedProject.description}
                    </p>

                    <h3 className="text-lg font-semibold mb-3">Tecnologías</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-3">Características</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {selectedProject.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Resultados</h3>
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <p className="text-green-700 font-medium">
                        {selectedProject.results}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <FaExternalLinkAlt />
                          Ver proyecto en vivo
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                        >
                          <FaGithub />
                          Ver código
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio; 