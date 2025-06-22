import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaReddit, FaPaperPlane, FaTimes, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useState } from 'react';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/login' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/login' },
  { icon: FaTwitter, href: 'https://twitter.com/login' },
  { icon: FaInstagram, href: 'https://www.instagram.com/accounts/login/' },
  { icon: FaReddit, href: 'https://www.reddit.com/login' },
];

const quickLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Sobre Nosotros', href: '#about' },
  { name: 'Contacto', href: '#contact' },
];

// Componente Modal
const LegalModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full p-3 transition-all duration-200 ease-out hover:scale-110 border border-transparent hover:border-red-200"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <div className="p-6">
          <div className="prose prose-lg max-w-none">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  // Contenido de los términos legales
  const legalContent = {
    'terminos-y-condiciones': {
      title: 'Términos y Condiciones',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h3>
            <p className="text-gray-700 mb-4">
              Al acceder y utilizar los servicios de CostaDev, usted acepta estar sujeto a estos términos y condiciones. 
              Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Descripción de Servicios</h3>
            <p className="text-gray-700 mb-4">
              CostaDev ofrece servicios de desarrollo web, diseño UI/UX, marketing digital, aplicaciones móviles y consultoría IT. 
              Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de nuestros servicios en cualquier momento.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Propiedad Intelectual</h3>
            <p className="text-gray-700 mb-4">
              Todo el contenido, marcas comerciales, diseños, logotipos y software utilizados en este sitio web son propiedad de CostaDev 
              o de nuestros licenciantes y están protegidos por las leyes de propiedad intelectual chilenas e internacionales.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">4. Uso Aceptable</h3>
            <p className="text-gray-700 mb-4">
              Usted se compromete a utilizar nuestros servicios únicamente para fines legales y de acuerdo con estos términos. 
              Está prohibido el uso de nuestros servicios para actividades ilegales, fraudulentas o que puedan dañar a terceros.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">5. Limitación de Responsabilidad</h3>
            <p className="text-gray-700 mb-4">
              CostaDev no será responsable por daños indirectos, incidentales, especiales o consecuentes que puedan resultar del uso 
              de nuestros servicios, incluyendo pero no limitado a pérdida de datos, interrupciones del servicio o daños comerciales.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">6. Modificaciones</h3>
            <p className="text-gray-700 mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente 
              después de su publicación en el sitio web. Se recomienda revisar periódicamente estos términos.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">7. Ley Aplicable</h3>
            <p className="text-gray-700 mb-4">
              Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa será resuelta en los tribunales 
              competentes de Santiago, Chile.
            </p>
          </section>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CL')}
            </p>
          </div>
        </div>
      )
    },
    'politica-privacidad': {
      title: 'Política de Privacidad',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h3>
            <p className="text-gray-700 mb-4">
              Recopilamos información que usted nos proporciona directamente, como nombre, correo electrónico, teléfono y mensajes 
              cuando utiliza nuestros formularios de contacto o se suscribe a nuestro newsletter.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Uso de la Información</h3>
            <p className="text-gray-700 mb-4">
              Utilizamos su información para: proporcionar nuestros servicios, comunicarnos con usted, enviar newsletters, 
              mejorar nuestros servicios y cumplir con obligaciones legales.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Compartir Información</h3>
            <p className="text-gray-700 mb-4">
              No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando sea necesario para 
              proporcionar nuestros servicios o cuando la ley lo requiera.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">4. Seguridad de Datos</h3>
            <p className="text-gray-700 mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal 
              contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">5. Sus Derechos</h3>
            <p className="text-gray-700 mb-4">
              De acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada, usted tiene derecho a: acceder, rectificar, 
              cancelar y oponerse al tratamiento de sus datos personales.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">6. Cookies</h3>
            <p className="text-gray-700 mb-4">
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede configurar su navegador para rechazar 
              cookies, aunque esto puede afectar la funcionalidad del sitio.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">7. Contacto</h3>
            <p className="text-gray-700 mb-4">
              Para ejercer sus derechos o realizar consultas sobre esta política, contáctenos en: contacto@costadev.xyz
            </p>
          </section>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CL')}
            </p>
          </div>
        </div>
      )
    },
    'politica-cookies': {
      title: 'Política de Cookies',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. ¿Qué son las Cookies?</h3>
            <p className="text-gray-700 mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. 
              Nos ayudan a mejorar su experiencia y a entender cómo utiliza nuestro sitio.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Tipos de Cookies que Utilizamos</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Cookies Esenciales</h4>
                <p className="text-gray-700">Necesarias para el funcionamiento básico del sitio web.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Cookies de Rendimiento</h4>
                <p className="text-gray-700">Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Cookies de Funcionalidad</h4>
                <p className="text-gray-700">Permiten recordar sus preferencias y personalizar su experiencia.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Gestión de Cookies</h3>
            <p className="text-gray-700 mb-4">
              Puede controlar y gestionar las cookies a través de la configuración de su navegador. Tenga en cuenta que 
              deshabilitar ciertas cookies puede afectar la funcionalidad de nuestro sitio web.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">4. Cookies de Terceros</h3>
            <p className="text-gray-700 mb-4">
              Algunos servicios de terceros (como Google Analytics) pueden establecer cookies en su dispositivo. 
              Estos servicios tienen sus propias políticas de privacidad.
            </p>
          </section>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CL')}
            </p>
          </div>
        </div>
      )
    },
    'terminos-uso': {
      title: 'Términos de Uso',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Uso del Sitio Web</h3>
            <p className="text-gray-700 mb-4">
              Este sitio web está destinado únicamente para uso informativo y comercial legítimo. Usted se compromete a utilizar 
              el sitio de manera responsable y de acuerdo con todas las leyes aplicables.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Contenido del Sitio</h3>
            <p className="text-gray-700 mb-4">
              Todo el contenido de este sitio web, incluyendo textos, imágenes, gráficos y software, está protegido por derechos 
              de autor y otras leyes de propiedad intelectual. No está permitida la reproducción sin autorización previa.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Enlaces Externos</h3>
            <p className="text-gray-700 mb-4">
              Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido o las prácticas 
              de privacidad de estos sitios externos.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">4. Disponibilidad del Servicio</h3>
            <p className="text-gray-700 mb-4">
              Nos esforzamos por mantener el sitio web disponible 24/7, pero no garantizamos la disponibilidad ininterrumpida. 
              Podemos realizar mantenimiento programado que puede resultar en interrupciones temporales.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">5. Prohibiciones</h3>
            <p className="text-gray-700 mb-4">
              Está prohibido: usar el sitio para actividades ilegales, intentar acceder a áreas restringidas, 
              transmitir virus o código malicioso, o interferir con el funcionamiento del sitio.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">6. Modificaciones</h3>
            <p className="text-gray-700 mb-4">
              Nos reservamos el derecho de modificar estos términos de uso en cualquier momento. Los cambios serán efectivos 
              inmediatamente después de su publicación en el sitio web.
            </p>
          </section>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CL')}
            </p>
          </div>
        </div>
      )
    },
    'politica-seguridad': {
      title: 'Política de Seguridad',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Compromiso con la Seguridad</h3>
            <p className="text-gray-700 mb-4">
              CostaDev se compromete a proteger la seguridad de la información de nuestros clientes y usuarios. 
              Implementamos medidas de seguridad robustas para salvaguardar todos los datos que manejamos.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Medidas de Seguridad Técnicas</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Encriptación</h4>
                <p className="text-gray-700">Utilizamos encriptación SSL/TLS para proteger la transmisión de datos.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Firewalls</h4>
                <p className="text-gray-700">Implementamos firewalls para proteger nuestros sistemas contra accesos no autorizados.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Monitoreo</h4>
                <p className="text-gray-700">Monitoreamos constantemente nuestros sistemas para detectar amenazas de seguridad.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Gestión de Accesos</h3>
            <p className="text-gray-700 mb-4">
              Limitamos el acceso a la información personal solo a empleados autorizados que necesitan acceder a ella 
              para realizar sus funciones. Todos los empleados reciben capacitación en seguridad de datos.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">4. Respuesta a Incidentes</h3>
            <p className="text-gray-700 mb-4">
              Tenemos un plan de respuesta a incidentes de seguridad que incluye notificación oportuna a las autoridades 
              competentes y a los usuarios afectados, según lo requiera la ley.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">5. Cumplimiento Legal</h3>
            <p className="text-gray-700 mb-4">
              Cumplimos con todas las leyes y regulaciones chilenas aplicables en materia de seguridad de datos, 
              incluyendo la Ley N° 19.628 sobre Protección de la Vida Privada.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">6. Reporte de Vulnerabilidades</h3>
            <p className="text-gray-700 mb-4">
              Si descubre una vulnerabilidad de seguridad, por favor repórtela inmediatamente a: seguridad@costadev.xyz
            </p>
          </section>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CL')}
            </p>
          </div>
        </div>
      )
    },
    'mapa-sitio': {
      title: 'Mapa del Sitio',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Estructura del Sitio Web</h3>
            <p className="text-gray-700 mb-6">
              Navegue fácilmente por todas las secciones de nuestro sitio web. Aquí encontrará un mapa completo de la estructura y contenido disponible.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Páginas Principales</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">🏠 Inicio</h4>
                <p className="text-gray-700 mb-2">Página principal con presentación de CostaDev</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hero section con llamada a la acción</li>
                  <li>• Servicios destacados</li>
                  <li>• Información de contacto rápida</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">🛠️ Servicios</h4>
                <p className="text-gray-700 mb-2">Catálogo completo de nuestros servicios</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Desarrollo Web</li>
                  <li>• Diseño UI/UX</li>
                  <li>• Marketing Digital</li>
                  <li>• SEO & Posicionamiento</li>
                  <li>• Apps Móviles</li>
                  <li>• Consultoría IT</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">💼 Portafolio</h4>
                <p className="text-gray-700 mb-2">Proyectos destacados y casos de éxito</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Filtros por categoría</li>
                  <li>• Detalles de proyectos</li>
                  <li>• Tecnologías utilizadas</li>
                  <li>• Resultados obtenidos</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">❓ FAQ</h4>
                <p className="text-gray-700 mb-2">Preguntas frecuentes y respuestas</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Preguntas sobre servicios</li>
                  <li>• Proceso de trabajo</li>
                  <li>• Plazos y costos</li>
                  <li>• Soporte técnico</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">👥 Sobre Nosotros</h4>
                <p className="text-gray-700 mb-2">Información sobre CostaDev</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Nuestra historia</li>
                  <li>• Misión y valores</li>
                  <li>• Equipo de trabajo</li>
                  <li>• Certificaciones</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">📞 Contacto</h4>
                <p className="text-gray-700 mb-2">Formulario de contacto y información</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Formulario de contacto</li>
                  <li>• Información de contacto</li>
                  <li>• Horarios de atención</li>
                  <li>• Ubicación</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Secciones Adicionales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🔧 Tecnologías</h4>
                <p className="text-gray-700 text-sm">Stack tecnológico que utilizamos</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📊 Estadísticas</h4>
                <p className="text-gray-700 text-sm">Métricas y logros de la empresa</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">💬 Testimonios</h4>
                <p className="text-gray-700 text-sm">Opiniones de nuestros clientes</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📰 Newsletter</h4>
                <p className="text-gray-700 text-sm">Suscripción a noticias y ofertas</p>
              </div>
            </div>
          </section>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CL')}
            </p>
          </div>
        </div>
      )
    },
    'accesibilidad': {
      title: 'Accesibilidad',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Compromiso con la Accesibilidad</h3>
            <p className="text-gray-700 mb-4">
              CostaDev se compromete a hacer que nuestro sitio web sea accesible para todas las personas, 
              independientemente de sus capacidades o limitaciones. Trabajamos continuamente para mejorar 
              la accesibilidad de nuestro sitio web.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Estándares de Accesibilidad</h3>
            <p className="text-gray-700 mb-4">
              Nuestro sitio web está diseñado y desarrollado siguiendo las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, 
              nivel AA, que son las pautas internacionales de accesibilidad web.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Características de Accesibilidad</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🎨 Contraste y Colores</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Alto contraste entre texto y fondo</li>
                  <li>• Colores no son la única forma de transmitir información</li>
                  <li>• Texto legible en diferentes tamaños</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">⌨️ Navegación por Teclado</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Navegación completa usando solo teclado</li>
                  <li>• Indicadores de foco visibles</li>
                  <li>• Orden de tabulación lógico</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🖼️ Imágenes y Multimedia</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Textos alternativos para todas las imágenes</li>
                  <li>• Subtítulos en videos</li>
                  <li>• Controles de reproducción accesibles</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📱 Diseño Responsivo</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Adaptable a diferentes tamaños de pantalla</li>
                  <li>• Zoom hasta 200% sin pérdida de funcionalidad</li>
                  <li>• Orientación horizontal y vertical</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🔊 Tecnologías de Asistencia</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Compatible con lectores de pantalla</li>
                  <li>• Estructura semántica HTML</li>
                  <li>• Etiquetas ARIA cuando es necesario</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📝 Formularios</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Etiquetas asociadas a campos de entrada</li>
                  <li>• Mensajes de error claros</li>
                  <li>• Validación accesible</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mejoras Continuas</h3>
            <p className="text-gray-700 mb-4">
              Realizamos auditorías regulares de accesibilidad y trabajamos con expertos en el campo para 
              identificar y corregir barreras de accesibilidad. Nos comprometemos a mantener y mejorar 
              continuamente la accesibilidad de nuestro sitio web.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Reportar Problemas de Accesibilidad</h3>
            <p className="text-gray-700 mb-4">
              Si encuentra algún problema de accesibilidad en nuestro sitio web, por favor contáctenos. 
              Su retroalimentación nos ayuda a mejorar la experiencia para todos los usuarios.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Contacto para accesibilidad:</strong><br />
                Email: accesibilidad@costadev.xyz<br />
                Teléfono: +56 9 XXXX XXXX
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recursos de Accesibilidad</h3>
            <div className="space-y-2">
              <p className="text-gray-700 text-sm">
                • <strong>WCAG 2.1:</strong> Pautas de Accesibilidad para el Contenido Web
              </p>
              <p className="text-gray-700 text-sm">
                • <strong>Ley N° 20.422:</strong> Establece Normas sobre Igualdad de Oportunidades e Inclusión Social de Personas con Discapacidad
              </p>
              <p className="text-gray-700 text-sm">
                • <strong>WAI-ARIA:</strong> Especificación para tecnologías de asistencia
              </p>
            </div>
          </section>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CL')}
            </p>
          </div>
        </div>
      )
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Por favor, ingresa un correo electrónico.');
      return;
    }

    setIsSubmitting(true);
    const notification = toast.custom(
      (t) => (
        <div className={`transform transition-all ${t.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} bg-white shadow-lg rounded-lg p-4 flex items-center border-l-4 border-blue-500 max-w-md w-full`}>
          <FaSpinner className="animate-spin text-3xl text-blue-500 flex-shrink-0" />
          <div className="ml-4 flex-grow">
            <p className="font-bold text-gray-800 text-lg mb-1">Procesando suscripción...</p>
            <p className="text-gray-700 text-sm">Estamos agregando tu correo a nuestra lista de suscriptores.<br />
              <span className="block mt-1">En unos segundos recibirás un correo de bienvenida confirmando tu suscripción.</span>
            </p>
          </div>
        </div>
      ),
      { duration: Infinity }
    );

    try {
      await axios.post('http://localhost:5000/api/newsletter/subscribe', { email });

      toast.custom(
        (t) => (
          <div className={`transform transition-all ${t.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} bg-white shadow-lg rounded-lg p-4 flex items-center border-l-4 border-green-500 max-w-md w-full`}>
            <FaCheckCircle className="text-3xl text-green-500 flex-shrink-0" />
            <div className="ml-4 flex-grow">
              <p className="font-bold text-gray-800 text-lg mb-1">¡Suscripción confirmada!</p>
              <p className="text-gray-700 text-sm">Gracias por unirte a nuestro newsletter.<br />
                <span className="block mt-1">A partir de ahora recibirás en tu correo nuestras novedades, ofertas y recursos exclusivos para potenciar tu presencia digital.</span>
                <span className="block mt-1">¡Nos alegra tenerte en la comunidad de CostaDev!</span>
              </p>
            </div>
            <button onClick={() => toast.dismiss(t.id)} className="ml-4 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
              <FaTimes className="text-gray-500 text-lg" />
            </button>
          </div>
        ),
        { id: notification, duration: 7000 }
      );
      setEmail('');
    } catch (error) {
      const message = error.response?.data?.message || 'Hubo un problema al suscribirte.';
      toast.custom(
        (t) => (
          <div className={`transform transition-all ${t.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} bg-white shadow-lg rounded-lg p-4 flex items-center border-l-4 border-red-500 max-w-md w-full`}>
            <FaExclamationCircle className="text-3xl text-red-500 flex-shrink-0" />
            <div className="ml-4 flex-grow">
              <p className="font-bold text-gray-800 text-lg mb-1">Error en la suscripción</p>
              <p className="text-gray-700 text-sm">{message}<br />
                <span className="block mt-1">Por favor, verifica que tu correo sea válido e inténtalo de nuevo.</span>
                <span className="block mt-1">Si el problema persiste, contáctanos directamente.</span>
              </p>
            </div>
            <button onClick={() => toast.dismiss(t.id)} className="ml-4 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
              <FaTimes className="text-gray-500 text-lg" />
            </button>
          </div>
        ),
        { id: notification, duration: 7000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50 text-gray-700 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Columna de la Empresa */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">CostaDev</h3>
              <p className="text-gray-600 leading-relaxed">
                Transformamos ideas en realidad digital. Especialistas en desarrollo web, aplicaciones móviles y soluciones tecnológicas innovadoras.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <p className="text-gray-600"><strong>Email:</strong> contacto@costadev.xyz</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <p className="text-gray-600"><strong>Horario:</strong> 09:00 - 18:00 horas</p>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-100 transition-all duration-200 ease-out transform hover:scale-110 shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columna de Enlaces Rápidos */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-600 mb-6">Enlaces Rápidos</h3>
            <div className="grid grid-cols-1 gap-3">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out flex items-center group hover:translate-x-1 hover:font-medium">
                <span className="w-1 h-1 bg-blue-600 rounded-full mr-3 group-hover:w-3 group-hover:h-3 group-hover:bg-blue-500 transition-all duration-200 ease-out"></span>
                Inicio
              </a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out flex items-center group hover:translate-x-1 hover:font-medium">
                <span className="w-1 h-1 bg-blue-600 rounded-full mr-3 group-hover:w-3 group-hover:h-3 group-hover:bg-blue-500 transition-all duration-200 ease-out"></span>
                Servicios
              </a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out flex items-center group hover:translate-x-1 hover:font-medium">
                <span className="w-1 h-1 bg-blue-600 rounded-full mr-3 group-hover:w-3 group-hover:h-3 group-hover:bg-blue-500 transition-all duration-200 ease-out"></span>
                Portafolio
              </a>
              <a href="#technologies" className="text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out flex items-center group hover:translate-x-1 hover:font-medium">
                <span className="w-1 h-1 bg-blue-600 rounded-full mr-3 group-hover:w-3 group-hover:h-3 group-hover:bg-blue-500 transition-all duration-200 ease-out"></span>
                Tecnologías
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out flex items-center group hover:translate-x-1 hover:font-medium">
                <span className="w-1 h-1 bg-blue-600 rounded-full mr-3 group-hover:w-3 group-hover:h-3 group-hover:bg-blue-500 transition-all duration-200 ease-out"></span>
                Testimonios
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out flex items-center group hover:translate-x-1 hover:font-medium">
                <span className="w-1 h-1 bg-blue-600 rounded-full mr-3 group-hover:w-3 group-hover:h-3 group-hover:bg-blue-500 transition-all duration-200 ease-out"></span>
                FAQ
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out flex items-center group hover:translate-x-1 hover:font-medium">
                <span className="w-1 h-1 bg-blue-600 rounded-full mr-3 group-hover:w-3 group-hover:h-3 group-hover:bg-blue-500 transition-all duration-200 ease-out"></span>
                Contacto
              </a>
            </div>
          </div>

          {/* Columna del Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Suscríbete al Newsletter</h3>
              <p className="text-gray-600 mb-6">Recibe las últimas noticias y ofertas directamente en tu correo.</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="tu.correo@ejemplo.com" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full p-4 pr-12 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-lg" 
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="absolute right-2 top-2 w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-110 disabled:opacity-50 transition-all duration-200 ease-out flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <FaSpinner className="animate-spin text-sm" />
                  ) : (
                    <FaPaperPlane className="text-sm" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Al suscribirte, aceptas recibir comunicaciones de CostaDev. Puedes cancelar en cualquier momento.
              </p>
            </form>
          </div>
        </div>

        {/* Enlaces Legales */}
        <div className="mt-16 pt-8 border-t border-blue-200">
          <div className="flex flex-wrap justify-center gap-8">
            <button 
              onClick={() => setActiveModal('terminos-y-condiciones')}
              className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out hover:scale-105 hover:font-medium px-3 py-1 rounded-lg hover:bg-blue-50"
            >
              Términos y Condiciones
            </button>
            <button 
              onClick={() => setActiveModal('politica-privacidad')}
              className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out hover:scale-105 hover:font-medium px-3 py-1 rounded-lg hover:bg-blue-50"
            >
              Política de Privacidad
            </button>
            <button 
              onClick={() => setActiveModal('politica-cookies')}
              className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out hover:scale-105 hover:font-medium px-3 py-1 rounded-lg hover:bg-blue-50"
            >
              Política de Cookies
            </button>
            <button 
              onClick={() => setActiveModal('terminos-uso')}
              className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out hover:scale-105 hover:font-medium px-3 py-1 rounded-lg hover:bg-blue-50"
            >
              Términos de Uso
            </button>
            <button 
              onClick={() => setActiveModal('politica-seguridad')}
              className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 ease-out hover:scale-105 hover:font-medium px-3 py-1 rounded-lg hover:bg-blue-50"
            >
              Política de Seguridad
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} CostaDev. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-8">
              <button 
                onClick={() => setActiveModal('accesibilidad')}
                className="hover:text-blue-600 transition-all duration-200 ease-out hover:scale-105 hover:font-medium px-3 py-1 rounded-lg hover:bg-blue-50"
              >
                Accesibilidad
              </button>
              <button 
                onClick={() => setActiveModal('mapa-sitio')}
                className="hover:text-blue-600 transition-all duration-200 ease-out hover:scale-105 hover:font-medium px-3 py-1 rounded-lg hover:bg-blue-50"
              >
                Mapa del Sitio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Legal */}
      {activeModal && (
        <LegalModal
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          title={legalContent[activeModal]?.title}
          content={legalContent[activeModal]?.content}
        />
      )}
    </footer>
  );
};

export default Footer; 