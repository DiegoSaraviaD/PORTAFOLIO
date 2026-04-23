import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    if (expandedId === id) setExpandedId(null);
    else setExpandedId(id);
  };

  return (
    <section id="projects" className="section-container">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Proyectos Destacados</h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="glass-card overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
            {/* Imagen del proyecto */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-primary-500 mb-4">{project.subtitle}</p>
                </div>
                <div className="flex gap-2 text-slate-400">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs font-medium text-slate-400 px-2 py-1">
                    +{project.technologies.length - 3} más
                  </span>
                )}
              </div>

              <button 
                onClick={() => toggleExpand(project.id)}
                className="mt-auto flex items-center justify-center w-full text-sm font-medium text-slate-400 hover:text-primary-400 transition-colors pt-4 border-t border-slate-700/50"
              >
                {expandedId === project.id ? (
                  <>Ver Menos <ChevronUp size={16} className="ml-1" /></>
                ) : (
                  <>Ver Detalles <ChevronDown size={16} className="ml-1" /></>
                )}
              </button>
            </div>

            {/* Panel expandible */}
            <div className={`px-6 bg-slate-800/30 overflow-hidden transition-all duration-300 ease-in-out ${expandedId === project.id ? 'max-h-96 py-6 border-t border-slate-700/50' : 'max-h-0 py-0'}`}>
              <div className="mb-4">
                <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span> El Problema
                </h4>
                <p className="text-sm text-slate-400">{project.problem}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> La Solución
                </h4>
                <p className="text-sm text-slate-400">{project.solution}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Stack Tecnológico Completo:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-primary-300 bg-primary-900/30 border border-primary-800/50 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
