<div align="center">

# 👨‍💻 Portafolio Profesional

**Diego Saravia Duran**

*Un espacio donde la creatividad y el código se encuentran para construir experiencias web modernas y de alto rendimiento.*

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

</div>

---

## 🌟 Sobre el Proyecto

Este es mi portafolio web personal, construido con tecnologías modernas para asegurar un rendimiento óptimo y una experiencia de usuario fluida. El diseño destaca por ser:
- **Oscuro y Premium:** Colores elegantes y contrastes cuidados para una lectura cómoda.
- **Responsivo:** Adaptable a dispositivos móviles, tablets y monitores ultrawide.
- **Dinámico:** Animaciones suaves y transiciones que enriquecen la navegación.

---

## 🚀 Características Principales

- 🎨 **Interfaz Moderna:** Componentes estilizados con Tailwind CSS y Lucide Icons.
- 📱 **Mobile First:** Diseño adaptativo pensado desde la base para smartphones.
- ⚡ **Alto Rendimiento:** Empaquetado superrápido gracias a Vite.
- 📁 **Gestión de Proyectos:** Sección dinámica que muestra proyectos reales, desde aplicaciones bancarias y de gestión, hasta menús digitales y catálogos vehiculares.

---

## 🛠️ Tecnologías Utilizadas

- **Core:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Enrutamiento:** [React Router DOM](https://reactrouter.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/)

---

## 📦 Instalación y Uso Local

¿Quieres probarlo en tu máquina? Sigue estos sencillos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/DiegoSaraviaD/PORTAFOLIO.git
   cd PORTAFOLIO
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **¡Listo!** Abre tu navegador y navega a `http://localhost:5173/`.

---

## 📂 Estructura del Código

La arquitectura del proyecto está pensada para ser escalable y fácil de mantener:

```text
src/
├── assets/        # Imágenes y recursos estáticos
├── components/    # Componentes reutilizables (Hero, About, Projects, Contact, etc.)
├── data/          # Datos estructurados (ej. projects.js con la lista de proyectos)
├── index.css      # Configuraciones y utilidades globales de Tailwind
├── App.jsx        # Contenedor principal de la aplicación
└── main.jsx       # Punto de entrada de React
```

---

## 🌐 Guía de Despliegue

### Despliegue en Vercel (Recomendado)
1. Inicia sesión en [Vercel](https://vercel.com/).
2. Importa el repositorio directamente desde tu cuenta de GitHub.
3. Asegúrate de que el **Framework Preset** seleccionado sea **Vite**.
4. Haz clic en **Deploy** y en segundos estará en vivo.

### Despliegue en GitHub Pages
1. Instala la herramienta necesaria: `npm install gh-pages --save-dev`
2. Configura tu `vite.config.js` añadiendo `base: '/PORTAFOLIO/'`
3. Agrega los scripts en tu `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Ejecuta `npm run deploy` y tu portafolio estará disponible en tu dominio de GitHub Pages.

---

<div align="center">
  <i>Construido con dedicación por Diego Saravia Duran.</i>
</div>
