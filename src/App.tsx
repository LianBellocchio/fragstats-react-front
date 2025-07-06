import React, { useState } from 'react';
import CircularProgressBar from './components/CircularProgressBar';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

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
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Navbar */}
      <header className="bg-gray-800 p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-yellow-500">FragStats.GG</div>
          <div className="space-x-4 flex items-center">
            <a href="#stats" className="hover:text-yellow-500 transition-colors">Estadísticas</a>
            <a href="#teams" className="hover:text-yellow-500 transition-colors">Equipos</a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors">Contacto</a>
            {!isLoggedIn ? (
              <>
                <button onClick={() => setIsLoginModalOpen(true)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  Iniciar sesión
                </button>
                <button onClick={() => setIsRegisterModalOpen(true)} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  Registrarse
                </button>
              </>
            ) : (
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Cerrar sesión
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/src/assets/backgroundhero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center p-8 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 text-yellow-500">¡Bienvenidos a FragStats.gg!</h1>
          <p className="text-xl mb-8">El sitio de estadísticas más completo de Counter Strike: Global Offensive</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Ver estadísticas
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Ranking de equipos
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-500">Estadísticas</h2>
        <p className="text-center text-lg mb-12">Encuentra aquí las estadísticas más importantes de los mejores jugadores y equipos de CS:GO.</p>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Buscar Jugador (SteamID64)"
              className="w-full md:w-auto flex-grow p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Obtener estadísticas
            </button>
          </div>
          
          {/* Player Stats Display */}
          <div className="mt-8 text-center text-gray-400">
            <h3 className="text-2xl font-semibold mb-4">Estadísticas del Jugador</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Avatar */}
              <div className="flex flex-col items-center">
                <img src="https://via.placeholder.com/150" alt="Player Avatar" className="rounded-full w-36 h-36 object-cover border-4 border-yellow-500 mb-2" />
                <p className="text-xl font-semibold">Nombre del Jugador</p>
              </div>
              {/* Stats Grid with Circular Progress Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <CircularProgressBar percentage={75} label="Win Rate" />
                <CircularProgressBar percentage={85} label="K/D Ratio" />
                <CircularProgressBar percentage={60} label="Headshot %" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" className="bg-gray-800 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-yellow-500">Ranking Semanal de Equipos</h2>
          <p className="text-center text-lg mb-12">Descubre los equipos mejor clasificados de la semana.</p>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors mb-8">
              Ver Ranking
            </button>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-yellow-500 text-gray-900 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">#</th>
                    <th className="py-3 px-6 text-left">Equipo</th>
                    <th className="py-3 px-6 text-left">Victorias</th>
                    <th className="py-3 px-6 text-left">Derrotas</th>
                    <th className="py-3 px-6 text-left">Puntaje</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200 text-sm font-light">
                  <tr className="border-b border-gray-600 hover:bg-gray-600">
                    <td className="py-3 px-6 text-left whitespace-nowrap">1</td>
                    <td className="py-3 px-6 text-left">Team Alpha</td>
                    <td className="py-3 px-6 text-left">15</td>
                    <td className="py-3 px-6 text-left">2</td>
                    <td className="py-3 px-6 text-left">1500</td>
                  </tr>
                  <tr className="border-b border-gray-600 hover:bg-gray-600">
                    <td className="py-3 px-6 text-left whitespace-nowrap">2</td>
                    <td className="py-3 px-6 text-left">Team Beta</td>
                    <td className="py-3 px-6 text-left">12</td>
                    <td className="py-3 px-6 text-left">4</td>
                    <td className="py-3 px-6 text-left">1450</td>
                  </tr>
                  <tr className="border-b border-gray-600 hover:bg-gray-600">
                    <td className="py-3 px-6 text-left whitespace-nowrap">3</td>
                    <td className="py-3 px-6 text-left">Team Gamma</td>
                    <td className="py-3 px-6 text-left">10</td>
                    <td className="py-3 px-6 text-left">5</td>
                    <td className="py-3 px-6 text-left">1400</td>
                  </tr>
                  <tr className="border-b border-gray-600 hover:bg-gray-600">
                    <td className="py-3 px-6 text-left whitespace-nowrap">4</td>
                    <td className="py-3 px-6 text-left">Team Delta</td>
                    <td className="py-3 px-6 text-left">8</td>
                    <td className="py-3 px-6 text-left">6</td>
                    <td className="py-3 px-6 text-left">1350</td>
                  </tr>
                  <tr className="hover:bg-gray-600">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-500">Contacto</h2>
        <p className="text-center text-lg mb-12">¿Tienes alguna duda o sugerencia? Contáctanos llenando el siguiente formulario:</p>
        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-300">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu Nombre"
                className="mt-1 block w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@ejemplo.com"
                className="mt-1 block w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-300">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tu mensaje aquí..."
                className="mt-1 block w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center p-6 mt-12">
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