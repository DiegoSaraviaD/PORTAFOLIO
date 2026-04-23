import React from 'react';

const About = () => {
  const skills = [
    "React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3",
    "Vite", "React Router", "Axios", "Recharts", "Supabase", "Git & GitHub"
  ];

  const softSkills = [
    "Resolución de problemas", "Trabajo en equipo", "Aprendizaje continuo",
    "Comunicación efectiva", "Adaptabilidad"
  ];

  return (
    <section id="about" className="section-container relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Sobre Mí</h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
          <p>
            ¡Hola! Soy Diego, un apasionado por la creación de soluciones digitales. Mi interés por el desarrollo web comenzó cuando descubrí cómo unas cuantas líneas de código podían transformarse en experiencias interactivas que miles de personas pueden utilizar.
          </p>
          <p>
            Hoy en día, me especializo en construir aplicaciones frontend robustas, utilizando herramientas modernas como <strong className="text-primary-500 font-medium">React y Tailwind CSS</strong>. Mi enfoque principal es desarrollar código limpio, mantenible y centrado en la experiencia del usuario.
          </p>
          <p>
            Además del desarrollo técnico, valoro enormemente el diseño intuitivo. Busco constantemente perfeccionar mis habilidades y aprender nuevas tecnologías que me permitan afrontar desafíos más complejos.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Tecnologías (Hard Skills)</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-dark-800 text-primary-400 text-sm font-medium rounded-full border border-primary-900/30 hover:bg-primary-900/20 hover:border-primary-500/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Habilidades Blandas</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm font-medium rounded-full border border-slate-700 hover:border-slate-500 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
