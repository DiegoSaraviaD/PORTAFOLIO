import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-slate-800 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex gap-6 mb-6">
          <a href="https://github.com/DiegoSaraviaD" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>

          <a href="mailto:correo@ejemplo.com" className="text-slate-400 hover:text-red-400 transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-slate-500 text-sm text-center">
          &copy; {currentYear} Diego Saravia Duran. Diseñado e implementado con React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
