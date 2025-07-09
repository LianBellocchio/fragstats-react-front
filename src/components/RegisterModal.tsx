import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: (name: string, email: string, password: string) => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(name, email, password);
    // Clear form fields
    setName('');
    setEmail('');
    setPassword('');
    onClose(); // Close modal after submission
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-neutral-800 p-8 rounded-lg shadow-lg max-w-md w-full relative"
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
          >
            <motion.button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >&times;</motion.button>
            <h2 className="text-3xl font-bold text-center mb-6 text-yellow-500">Registrarte</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name-register" className="block text-lg font-medium text-neutral-300 mb-1">Nombre</label>
                <input
                  type="text"
                  id="name-register"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-lg bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email-register" className="block text-lg font-medium text-neutral-300 mb-1">Correo</label>
                <input
                  type="email"
                  id="email-register"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-lg bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password-register" className="block text-lg font-medium text-neutral-300 mb-1">Contraseña</label>
                <input
                  type="password"
                  id="password-register"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-lg bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Registrarte
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
