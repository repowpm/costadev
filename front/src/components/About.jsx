import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Sobre <span className="text-gray-700">Nosotros</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12 max-w-3xl mx-auto">
            Somos un equipo de creativos, desarrolladores y estrategas apasionados por construir experiencias digitales que marcan la diferencia.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <div className="text-gray-700 space-y-6">
            <p className="text-justify">
              Nuestra misión es ayudar a las empresas a navegar el paisaje digital con soluciones innovadoras y personalizadas. Creemos en el poder de la tecnología para transformar negocios y en la importancia de un diseño centrado en el usuario. Cada proyecto es una oportunidad para crear algo único y memorable, combinando estrategia, diseño y tecnología de vanguardia.
            </p>
            <p className="text-justify">
              Desde el desarrollo web a medida hasta estrategias de marketing digital que generan impacto, nuestro enfoque se basa en la colaboración, la transparencia y la búsqueda constante de la excelencia. Nos encanta lo que hacemos y nos enorgullece ver a nuestros clientes alcanzar el éxito, convirtiendo sus ideas en realidades digitales exitosas y escalables.
            </p>
             <p className="text-justify">
              Trabajamos de cerca con nuestros clientes para entender sus metas y desafíos, lo que nos permite construir relaciones a largo plazo basadas en la confianza y los resultados.
            </p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" alt="Equipo trabajando" className="rounded-lg shadow-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 