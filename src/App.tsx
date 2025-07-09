import { motion } from 'framer-motion';
import React, { useState } from 'react';
import CircularProgressBar from './components/CircularProgressBar';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import valveLogo from './assets/valve-icon.png';
import eseaLogo from './assets/esea.png';
import faceitLogo from './assets/faceit.png';
import gamersClubLogo from './assets/Gamers_Club_logo.png';
import mainIcon from './assets/MainIcon.png';

const App: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', { email, password });
    // Here you would typically call an API to authenticate the user
    setIsLoggedIn(true); // For now, just set to true
  };

  const handleRegister = (name: string, email: string, password: string) => {
    console.log('Register attempt:', { name, email, password });
    // Here you would typically call an API to register the user
    setIsLoggedIn(true); // For now, just set to true
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
      {/* Navbar */}
      <header className="bg-primary-dark py-0 px-8 shadow-md">
        <nav className="container flex justify-start items-center space-x-8">
          <motion.img
            src={mainIcon}
            alt="FragStats.GG Logo"
            className="h-[90px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Search Bar */}
          <div className="flex-grow flex justify-center px-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar Jugador (SteamID64)"
                className="w-full p-2 pl-10 rounded-lg bg-neutral-700 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Nav Links and Buttons */}
          <div className="flex items-center space-x-6">
            <motion.a
              href="#stats"
              className="relative text-neutral-100 text-lg group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Estadísticas
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.a>
            <motion.a
              href="#teams"
              className="relative text-neutral-100 text-lg group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Equipos
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="relative text-neutral-100 text-lg group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contacto
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.a>

            <div className="w-px h-6 bg-neutral-600"></div>

            {!isLoggedIn ? (
              <>
                <motion.button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="text-neutral-100 text-lg hover:text-primary-light transition-colors"
                  whileHover={{ scale: 1.05, color: '#FACC15' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Iniciar sesión
                </motion.button>
                <motion.button
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md text-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Registrarse
                </motion.button>
              </>
            ) : (
              <motion.button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md text-sm transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cerrar sesión
              </motion.button>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-start text-white"
        style={{ backgroundImage: "url('/src/assets/backgroundhero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-12">
          <motion.h1
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >¡Bienvenidos a FragStats.gg!</motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >El sitio de estadísticas más completo de Counter Strike: Global Offensive</motion.p>

          {/* Platform Logos */}
          <div className="flex items-center space-x-6 mb-10">
            <motion.img
              src={valveLogo}
              alt="Valve"
              className="h-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <motion.span
              className="text-2xl font-thin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >+</motion.span>
            <motion.img
              src={eseaLogo}
              alt="ESEA"
              className="h-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.span
              className="text-2xl font-thin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >+</motion.span>
            <motion.img
              src={faceitLogo}
              alt="FACEIT"
              className="h-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            />
            <motion.span
              className="text-2xl font-thin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >+</motion.span>
            <motion.img
              src={gamersClubLogo}
              alt="Gamers Club"
              className="h-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
          </div>

          <div className="flex space-x-4">
            <motion.button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-md text-lg transition-colors"
              whileHover={{ scale: 1.05, backgroundColor: '#FF9900E' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Ver estadísticas
            </motion.button>
            <motion.button
              className="bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-4 px-8 rounded-md text-lg transition-colors"
              whileHover={{ scale: 1.05, backgroundColor: '#525252' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Ranking de equipos
            </motion.button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        id="stats"
        className="container mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >Estadísticas</motion.h2>
        <motion.p
          className="text-center text-lg mb-12 text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >Encuentra aquí las estadísticas más importantes de los mejores jugadores y equipos de CS:GO.</motion.p>
        <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            {/* Search bar moved to navbar */}
            <motion.button
              className="w-full md:w-auto bg-yellow-600 hover:bg-brand-orange text-white font-bold py-3 px-6 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Obtener estadísticas
            </motion.button>
          </div>

          {/* Player Stats Display */}
          <div className="mt-8 text-center text-neutral-400">
            <motion.h3
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >Estadísticas del Jugador</motion.h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Avatar */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <img src="https://via.placeholder.com/150" alt="Player Avatar" className="rounded-full w-36 h-36 object-cover border-4 border-yellow-500 mb-2 align-center justify-center" />
                <p className="text-xl font-semibold">Nombre del Jugador</p>
              </motion.div>
              {/* Stats Grid with Circular Progress Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <CircularProgressBar percentage={75} label="Win Rate" />
                <CircularProgressBar percentage={85} label="K/D Ratio" />
                <CircularProgressBar percentage={60} label="Headshot %" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Teams Section */}
      <motion.section
        id="teams"
        className="bg-neutral-800 py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >Ranking Semanal de Equipos</motion.h2>
          <motion.p
            className="text-center text-lg mb-12 text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >Descubre los equipos mejor clasificados de la semana.</motion.p>
          <div className="bg-neutral-900 p-8 rounded-lg shadow-lg">
            <motion.button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Ranking
            </motion.button>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-neutral-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-yellow-500 text-neutral-900 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">#</th>
                    <th className="py-3 px-6 text-left">Equipo</th>
                    <th className="py-3 px-6 text-left">Victorias</th>
                    <th className="py-3 px-6 text-left">Derrotas</th>
                    <th className="py-3 px-6 text-left">Puntaje</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-200 text-sm font-light">
                  <tr className="border-b border-neutral-600 hover:bg-neutral-600">
                    <td className="py-3 px-6 text-left whitespace-nowrap">1</td>
                    <td className="py-3 px-6 text-left">Team Alpha</td>
                    <td className="py-3 px-6 text-left">15</td>
                    <td className="py-3 px-6 text-left">2</td>
                    <td className="py-3 px-6 text-left">1500</td>
                  </tr>
                  <tr className="border-b border-neutral-600 hover:bg-neutral-600">
                    <td className="py-3 px-6 text-left whitespace-nowrap">2</td>
                    <td className="py-3 px-6 text-left">Team Beta</td>
                    <td className="py-3 px-6 text-left">12</td>
                    <td className="py-3 px-6 text-left">4</td>
                    <td className="py-3 px-6 text-left">1450</td>
                  </tr>
                  <tr className="border-b border-neutral-600 hover:bg-neutral-600">
                    <td className="py-3 px-6 text-left whitespace-nowrap">3</td>
                    <td className="py-3 px-6 text-left">Team Gamma</td>
                    <td className="py-3 px-6 text-left">10</td>
                    <td className="py-3 px-6 text-left">5</td>
                    <td className="py-3 px-6 text-left">1400</td>
                  </tr>
                  <tr className="border-b border-neutral-600 hover:bg-neutral-600">
                    <td className="py-3 px-6 text-left whitespace-nowrap">4</td>
                    <td className="py-3 px-6 text-left">Team Delta</td>
                    <td className="py-3 px-6 text-left">8</td>
                    <td className="py-3 px-6 text-left">6</td>
                    <td className="py-3 px-6 text-left">1350</td>
                  </tr>
                  <tr className="hover:bg-neutral-600">
                    <td className="py-3 px-6 text-left whitespace-nowrap">5</td>
                    <td className="py-3 px-6 text-left">Team Epsilon</td>
                    <td className="py-3 px-6 text-left">7</td>
                    <td className="py-3 px-6 text-left">7</td>
                    <td className="py-3 px-6 text-left">1300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="container mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >Contacto</motion.h2>
        <motion.p
          className="text-center text-lg mb-12 text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >¿Tienes alguna duda o sugerencia? Contáctanos llenando el siguiente formulario:</motion.p>
        <div className="max-w-lg mx-auto bg-neutral-800 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-neutral-300">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu Nombre"
                className="mt-1 block w-full p-3 rounded-lg bg-neutral-700 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-neutral-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@ejemplo.com"
                className="mt-1 block w-full p-3 rounded-lg bg-neutral-700 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-neutral-300">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tu mensaje aquí..."
                className="mt-1 block w-full p-3 rounded-lg bg-neutral-700 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar
            </motion.button>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-neutral-800 text-neutral-400 text-center p-6 mt-12">
        <p>&copy; {new Date().getFullYear()} FragStats.gg - Todos los derechos reservados.</p>
      </footer>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onRegister={handleRegister}
      />
    </div>
  );
};

export default App;