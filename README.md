# CostaDev - Agencia de Desarrollo Web

Una landing page moderna y impactante para una agencia digital especializada en desarrollo web, construida con React, Vite, Express, MongoDB y Tailwind CSS.

## 🚀 Características

### Frontend (React + Vite + Tailwind)
- **Hero Section** con animaciones de partículas espectaculares
- **Navegación** moderna y responsive
- **Sección de Servicios** con cards interactivas
- **Formulario de Contacto** con selector de servicios
- **Footer** moderno con redes sociales
- **Animaciones** fluidas con Framer Motion
- **Diseño Responsive** para todos los dispositivos

### Backend (Express + MongoDB)
- **API RESTful** para manejo de contactos
- **Base de datos MongoDB** con Mongoose
- **Sistema de emails** automático con Nodemailer
- **Validación** de datos robusta
- **CORS** configurado para desarrollo y producción

## 📁 Estructura del Proyecto

```
costa-dev/
├── front/                 # Frontend React + Vite
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── assets/        # Imágenes y recursos
│   │   └── App.jsx        # Componente principal
│   ├── package.json
│   └── tailwind.config.js
├── backend/               # Backend Express + MongoDB
│   ├── config/           # Configuración de DB
│   ├── controllers/      # Controladores de la API
│   ├── models/           # Modelos de MongoDB
│   ├── routes/           # Rutas de la API
│   ├── server.js         # Servidor principal
│   └── package.json
└── README.md
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js (v16 o superior)
- MongoDB (local o Atlas)
- Cuenta de Gmail para emails

### Frontend
```bash
cd front
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
# Copiar env.example a .env y configurar variables
cp env.example .env
npm run dev
```

## ⚙️ Configuración de Variables de Entorno

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/costa-digital
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicación
TEAM_EMAIL=equipo@costadigital.com
FRONTEND_URL=http://localhost:5173
```

## 🚀 Despliegue

### Frontend (cPanel)
1. Construir el proyecto: `npm run build`
2. Subir la carpeta `dist` al directorio público de cPanel
3. Configurar el dominio personalizado

### Backend (Render)
1. Conectar el repositorio a Render
2. Configurar las variables de entorno
3. Usar el comando de inicio: `npm start`

## 📧 Configuración de Email

Para usar Gmail con Nodemailer:
1. Habilitar autenticación de 2 factores
2. Generar contraseña de aplicación
3. Usar esa contraseña en `EMAIL_PASS`

## 🎨 Personalización

### Colores
Los colores principales están definidos en `front/tailwind.config.js`:
- Primary: Azul (#2563eb)
- Secondary: Púrpura (#d946ef)

### Contenido
Editar los textos en los componentes React según tu agencia.

## 📱 Responsive Design

El sitio está optimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Scripts Disponibles

### Frontend
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de producción

### Backend
- `npm run dev` - Servidor de desarrollo con nodemon
- `npm start` - Servidor de producción

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

Para soporte o consultas sobre el proyecto, contacta al equipo de desarrollo. 