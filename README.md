# FragStats.GG - Frontend (React & Tailwind)

Reimaginando el frontend de FragStats.GG, la plataforma de estadísticas de Counter-Strike, utilizando React y Tailwind CSS. Este proyecto busca modernizar la interfaz de usuario, mejorar el rendimiento y la responsividad, manteniendo la funcionalidad principal de la aplicación original.

## ✨ Características (En Desarrollo)

* **Interfaz de Usuario Moderna:** Diseño limpio y responsivo construido con Tailwind CSS.
* **Componentes Reutilizables:** Estructura modular basada en React para facilitar el desarrollo y mantenimiento.
* **Integración con API:** Preparado para consumir datos de la API de estadísticas de CS:GO (backend existente).
* **Secciones Clave:** Incluye las secciones de Inicio, Estadísticas de Jugadores, Ranking de Equipos y Contacto.

## 🛠️ Tecnologías Utilizadas

* **React:** Librería de JavaScript para construir interfaces de usuario.
* **Tailwind CSS:** Framework CSS de primera utilidad para un diseño rápido y personalizado.
* **TypeScript:** Para un desarrollo más robusto y escalable.
* **Vite:** Herramienta de construcción rápida para proyectos frontend.

## 🚀 Instalación y Uso

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/LianBellocchio/fragstats-react-front.git
   cd fragstats-react-front
   ```
2. **Instala las dependencias:**

   ```bash
   npm install
   ```
3. **Inicia el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

   El proyecto se abrirá en tu navegador en `http://localhost:5173` (o un puerto similar).

## 📂 Estructura del Proyecto

```
fragstats-react-front/
├── public/
├── src/
│   ├── assets/             # Imágenes y otros recursos
│   ├── components/         # Componentes reutilizables (futuro)
│   ├── App.tsx             # Componente principal de la aplicación
│   ├── index.css           # Archivo CSS principal (con directivas de Tailwind)
│   └── main.tsx            # Punto de entrada de la aplicación
├── tailwind.config.js      # Configuración de Tailwind CSS
├── postcss.config.js       # Configuración de PostCSS
├── vite.config.ts          # Configuración de Vite
├── package.json
└── README.md               # Este archivo
```
