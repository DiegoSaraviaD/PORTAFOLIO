import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-primary-500 font-semibold tracking-wide uppercase text-sm md:text-base mb-4 animate-fade-in-up">
              Hola, mi nombre es
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              Diego Saravia Duran.
            </h1>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
              Construyo experiencias web.
            </h3>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0">
              Soy un <strong className="text-slate-200">Desarrollador Frontend</strong> con sede en Lima, Perú, especializado en crear interfaces digitales excepcionales. Disfruto transformar ideas complejas en aplicaciones web elegantes, accesibles y de alto rendimiento.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/projects" className="btn-primary group">
                Ver Proyectos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <div className="flex gap-4 items-center ml-4">
                <a href="https://github.com/DiegoSaraviaD" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all">
                  <FaGithub size={28} />
                </a>

                <a href="mailto:correo@ejemplo.com" className="text-slate-400 hover:text-red-400 hover:scale-110 transition-all">
                  <FaEnvelope size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center w-full max-w-md">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-slate-800 p-2 shadow-2xl">
              <div className="absolute inset-0 border-4 border-primary-500 rounded-full animate-[spin_10s_linear_infinite] border-t-transparent border-l-transparent opacity-50"></div>
              <img 
                src="/profile.jpeg" 
                alt="Diego Saravia Duran" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
