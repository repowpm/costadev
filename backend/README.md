# CostaDev Backend API

Backend API para CostaDev - Agencia de Desarrollo Web

## 🚀 Características

- **API RESTful** con Express.js
- **Base de datos MongoDB** con Mongoose
- **Sistema de emails** con Nodemailer
- **Formulario de contacto** con notificaciones
- **Newsletter** con suscripciones
- **Configuración para producción**
- **Manejo de errores robusto**
- **Logging detallado**
- **Seguridad mejorada**

## 📋 Requisitos

- Node.js >= 18.0.0
- npm >= 8.0.0
- MongoDB
- Cuenta de email SMTP

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/costadev/backend.git
cd backend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp env.example env.config
```

Editar `env.config` con tus configuraciones:
```env
# Configuración del servidor
PORT=5000
NODE_ENV=development

# Base de datos MongoDB
MONGODB_URI=mongodb://localhost:27017/costadev

# Configuración de email SMTP
EMAIL_HOST=tu-servidor-smtp.com
EMAIL_PORT=465
EMAIL_SECURE=true

# Credenciales para el formulario de contacto
CONTACT_EMAIL_USER=contacto@tudominio.com
CONTACT_EMAIL_PASS=tu-contraseña

# Credenciales para el newsletter
NEWSLETTER_EMAIL_USER=newsletter@tudominio.com
NEWSLETTER_EMAIL_PASS=tu-contraseña

# Email del equipo para notificaciones
TEAM_EMAIL=contacto@tudominio.com

# URL del frontend
FRONTEND_URL=http://localhost:5173
```

4. **Iniciar MongoDB**
```bash
# Asegúrate de que MongoDB esté corriendo
mongod
```

5. **Ejecutar en desarrollo**
```bash
npm run dev
```

## 🚀 Scripts Disponibles

- `npm start` - Iniciar en producción
- `npm run dev` - Iniciar en desarrollo con nodemon
- `npm run prod` - Iniciar en modo producción
- `npm run lint` - Ejecutar linter
- `npm run lint:fix` - Corregir errores de linting

## 📡 Endpoints de la API

### Contacto
- `POST /api/contact` - Crear nuevo contacto
- `GET /api/contact` - Obtener todos los contactos (admin)
- `PUT /api/contact/:id` - Actualizar estado del contacto

### Newsletter
- `POST /api/newsletter/subscribe` - Suscribir al newsletter

### Health Check
- `GET /` - Estado de la API
- `GET /health` - Health check detallado

## 📧 Configuración de Email

El sistema utiliza Nodemailer para enviar emails. Configuraciones soportadas:

### SMTP
```env
EMAIL_HOST=mail.tudominio.com
EMAIL_PORT=465
EMAIL_SECURE=true
CONTACT_EMAIL_USER=contacto@tudominio.com
CONTACT_EMAIL_PASS=tu-contraseña
```

### Gmail (para pruebas)
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
CONTACT_EMAIL_USER=tu-email@gmail.com
CONTACT_EMAIL_PASS=tu-app-password
```

## 🗄️ Base de Datos

### Modelos

#### Contact
```javascript
{
  name: String (requerido),
  email: String (requerido, único),
  phone: String,
  service: String (requerido),
  message: String (requerido),
  budget: String,
  timeline: String,
  status: String (default: 'pending'),
  createdAt: Date
}
```

#### NewsletterSubscription
```javascript
{
  email: String (requerido, único),
  subscribedAt: Date
}
```

## 🔧 Configuración para Producción

1. **Usar archivo de configuración de producción**
```bash
cp env.production .env
```

2. **Configurar variables de producción**
- Cambiar `NODE_ENV=production`
- Usar URI de MongoDB de producción
- Configurar URLs del frontend de producción
- Establecer secretos seguros

3. **Iniciar en producción**
```bash
npm run prod
```

## 🛡️ Seguridad

- Headers de seguridad configurados
- CORS configurado para producción
- Validación de datos de entrada
- Rate limiting configurado
- Manejo seguro de errores

## 📊 Logging

El sistema incluye logging detallado:
- Requests HTTP con duración
- Errores con stack traces
- Estado de conexiones SMTP
- Operaciones de base de datos

## 🐛 Debugging

### Logs de desarrollo
```bash
NODE_ENV=development npm run dev
```

### Verificar conexión SMTP
```bash
# Los logs mostrarán el estado de la conexión
curl -X POST http://localhost:5000/api/contact
```

### Health check
```bash
curl http://localhost:5000/health
```

## 📝 Estructura del Proyecto

```
backend/
├── config/
│   └── db.js              # Configuración de MongoDB
├── controllers/
│   ├── contactController.js    # Controlador de contactos
│   └── newsletterController.js # Controlador de newsletter
├── models/
│   ├── Contact.js              # Modelo de contacto
│   └── NewsletterSubscription.js # Modelo de newsletter
├── routes/
│   ├── contactRoutes.js        # Rutas de contacto
│   └── newsletterRoutes.js     # Rutas de newsletter
├── env.config                   # Variables de entorno
├── env.production              # Configuración de producción
├── server.js                   # Servidor principal
└── package.json                # Dependencias y scripts
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Soporte

Para soporte técnico, contacta a:
- Email: contacto@costadev.xyz
- Sitio web: https://costadev.xyz

---

Desarrollado con ❤️ por el equipo de CostaDev 