# Portafolio - Diego Saravia Duran

Este es un portafolio web personal construido con React y Vite, estilizado con Tailwind CSS. Está diseñado para mostrar proyectos de desarrollo frontend, habilidades y ofrecer una forma de contacto, con un diseño oscuro, moderno y premium.

## 🚀 Tecnologías

- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/) (Iconos)

## 📦 Instalación Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona este repositorio o descarga el código fuente.
2. Abre una terminal en la carpeta del proyecto (`portfolio`).
3. Instala las dependencias ejecutando:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre tu navegador en la URL que aparece en consola (usualmente `http://localhost:5173/`).

## 🌐 Despliegue en Vercel o GitHub Pages

### Para Vercel (Recomendado)
Vercel ofrece un despliegue muy sencillo para aplicaciones de Vite:
1. Crea una cuenta en [Vercel](https://vercel.com/).
2. Sube el código a un repositorio de GitHub.
3. Importa el repositorio desde el panel de Vercel.
4. El "Framework Preset" debe ser **Vite**.
5. Clic en **Deploy**.

### Para GitHub Pages
Si prefieres GitHub Pages:
1. Instala el paquete `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Modifica el archivo `vite.config.js` y agrega la propiedad `base`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/TU_REPOSITORIO/' // Ej: '/portfolio-diego/'
   })
   ```
3. En `package.json` añade los scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Ejecuta `npm run deploy`.

## 📸 Estructura del Proyecto

- `src/components/` - Componentes de la UI (Hero, About, Projects, etc.)
- `src/data/` - Datos estáticos (lista de proyectos)
- `src/index.css` - Estilos globales de Tailwind
- `src/App.jsx` - Componente principal y maquetación
