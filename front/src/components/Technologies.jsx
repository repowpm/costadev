import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaDatabase, FaMobile, FaDesktop, FaServer, FaCloud, FaMicrosoft, FaGithub, FaBitbucket, FaSketch, FaChevronDown } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiVuedotjs, SiAngular, SiLaravel, SiDjango, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase, SiGooglecloud, SiKubernetes, SiTerraform, SiGit, SiFigma, SiAdobexd, SiWordpress, SiShopify, SiWoocommerce, SiStripe, SiPaypal, SiTwilio, SiSendgrid, SiMailchimp, SiGoogleanalytics } from 'react-icons/si';

const Technologies = () => {
  const [openCategories, setOpenCategories] = useState(new Set(['frontend'])); // Frontend abierto por defecto

  const technologyCategories = [
    {
      id: 'frontend',
      name: "Frontend",
      icon: FaDesktop,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", icon: FaReact, level: 95, color: "#61DAFB" },
        { name: "Vue.js", icon: SiVuedotjs, level: 90, color: "#4FC08D" },
        { name: "Angular", icon: SiAngular, level: 85, color: "#DD0031" },
        { name: "JavaScript", icon: SiJavascript, level: 98, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, level: 92, color: "#3178C6" },
        { name: "Next.js", icon: FaReact, level: 88, color: "#000000" }
      ]
    },
    {
      id: 'backend',
      name: "Backend",
      icon: FaServer,
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", icon: FaNodeJs, level: 95, color: "#339933" },
        { name: "Python", icon: FaPython, level: 90, color: "#3776AB" },
        { name: "Laravel", icon: SiLaravel, level: 85, color: "#FF2D20" },
        { name: "Django", icon: SiDjango, level: 88, color: "#092E20" },
        { name: "Java", icon: FaJava, level: 80, color: "#ED8B00" },
        { name: "PHP", icon: FaServer, level: 85, color: "#777BB4" }
      ]
    },
    {
      id: 'databases',
      name: "Bases de Datos",
      icon: FaDatabase,
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      technologies: [
        { name: "MongoDB", icon: SiMongodb, level: 92, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, level: 88, color: "#336791" },
        { name: "MySQL", icon: SiMysql, level: 85, color: "#4479A1" },
        { name: "Redis", icon: SiRedis, level: 90, color: "#DC382D" },
        { name: "Firebase", icon: SiFirebase, level: 87, color: "#FFCA28" }
      ]
    },
    {
      id: 'cloud',
      name: "Cloud & DevOps",
      icon: FaCloud,
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      technologies: [
        { name: "AWS", icon: FaAws, level: 90, color: "#FF9900" },
        { name: "Google Cloud", icon: SiGooglecloud, level: 85, color: "#4285F4" },
        { name: "Azure", icon: FaMicrosoft, level: 80, color: "#0078D4" },
        { name: "Docker", icon: FaDocker, level: 88, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, level: 75, color: "#326CE5" },
        { name: "Terraform", icon: SiTerraform, level: 70, color: "#7B42BC" }
      ]
    },
    {
      id: 'mobile',
      name: "Mobile",
      icon: FaMobile,
      color: "pink",
      gradient: "from-pink-500 to-rose-500",
      technologies: [
        { name: "React Native", icon: FaReact, level: 92, color: "#61DAFB" },
        { name: "Flutter", icon: FaMobile, level: 85, color: "#02569B" },
        { name: "Ionic", icon: FaMobile, level: 80, color: "#3880FF" },
        { name: "PWA", icon: FaMobile, level: 88, color: "#5A0FC8" }
      ]
    },
    {
      id: 'tools',
      name: "Herramientas & CMS",
      icon: FaDesktop,
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500",
      technologies: [
        { name: "WordPress", icon: SiWordpress, level: 90, color: "#21759B" },
        { name: "Shopify", icon: SiShopify, level: 85, color: "#95BF47" },
        { name: "WooCommerce", icon: SiWoocommerce, level: 88, color: "#96588A" },
        { name: "Figma", icon: SiFigma, level: 85, color: "#F24E1E" },
        { name: "Adobe XD", icon: SiAdobexd, level: 80, color: "#FF61F6" },
        { name: "Git", icon: SiGit, level: 95, color: "#F05032" }
      ]
    },
    {
      id: 'integrations',
      name: "Integraciones",
      icon: FaServer,
      color: "teal",
      gradient: "from-teal-500 to-blue-500",
      technologies: [
        { name: "Stripe", icon: SiStripe, level: 90, color: "#008CDD" },
        { name: "PayPal", icon: SiPaypal, level: 85, color: "#00457C" },
        { name: "Twilio", icon: SiTwilio, level: 80, color: "#F22F46" },
        { name: "SendGrid", icon: SiSendgrid, level: 85, color: "#00A4BD" },
        { name: "Mailchimp", icon: SiMailchimp, level: 80, color: "#FFE01B" },
        { name: "Google Analytics", icon: SiGoogleanalytics, level: 88, color: "#E37400" }
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    const newOpenCategories = new Set(openCategories);
    if (newOpenCategories.has(categoryId)) {
      newOpenCategories.delete(categoryId);
    } else {
      newOpenCategories.add(categoryId);
    }
    setOpenCategories(newOpenCategories);
  };

  const getLevelColor = (level) => {
    if (level >= 90) return 'text-green-600';
    if (level >= 80) return 'text-blue-600';
    if (level >= 70) return 'text-yellow-600';
    return 'text-gray-600';
  };

  const getLevelText = (level) => {
    if (level >= 90) return 'Experto';
    if (level >= 80) return 'Avanzado';
    if (level >= 70) return 'Intermedio';
    return 'Básico';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
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
            Stack Tecnológico
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Tecnologías <span className="gradient-text">Modernas</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabajamos con las tecnologías más modernas y confiables para crear soluciones digitales de alta calidad
          </p>
        </motion.div>

        {/* Technology Categories Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto space-y-6"
        >
          {technologyCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            const isOpen = openCategories.has(category.id);
            
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100"
              >
                {/* Category Header */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                      <CategoryIcon className="text-xl text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {category.technologies.length} tecnologías
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-gray-500 text-xl" />
                  </motion.div>
                </motion.button>

                {/* Technologies Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                          {category.technologies.map((tech, techIndex) => {
                            const TechIcon = tech.icon;
                            return (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                                className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
                              >
                                {/* Tech Header */}
                                <div className="flex items-center gap-4 mb-4">
                                  <div 
                                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: `${tech.color}20` }}
                                  >
                                    <TechIcon 
                                      className="text-2xl"
                                      style={{ color: tech.color }}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 text-lg">
                                      {tech.name}
                                    </h4>
                                    <span className={`text-sm font-semibold ${getLevelColor(tech.level)}`}>
                                      {getLevelText(tech.level)}
                                    </span>
                                  </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="space-y-2">
                                  <div className="flex justify-between text-xs text-gray-600">
                                    <span>Nivel de experiencia</span>
                                    <span>{tech.level}%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${tech.level}%` }}
                                      transition={{ duration: 1, delay: techIndex * 0.1 }}
                                      className="h-full rounded-full relative"
                                      style={{ backgroundColor: tech.color }}
                                    >
                                      <div className="absolute inset-0 bg-white opacity-30 rounded-full animate-pulse"></div>
                                    </motion.div>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Necesitas una tecnología específica?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Si no ves la tecnología que necesitas en nuestra lista, no te preocupes. 
              Estamos constantemente aprendiendo y adaptándonos a nuevas tecnologías.
            </p>
            <button onClick={scrollToContact} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Consultar Tecnologías
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies; 