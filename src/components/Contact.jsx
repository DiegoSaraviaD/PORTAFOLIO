import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-container text-center max-w-3xl">
      <h2 className="text-primary-500 font-semibold tracking-wide uppercase text-sm md:text-base mb-4">
        ¿Qué sigue?
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold mb-6">Ponte En Contacto</h3>
      <p className="text-lg text-slate-400 mb-10">
        Actualmente estoy abierto a nuevas oportunidades. Si tienes una pregunta, una propuesta de proyecto, o simplemente quieres saludar, intentaré responderte lo más pronto posible.
      </p>
      
      <a href="mailto:correo@ejemplo.com" className="btn-secondary text-lg px-8 py-4">
        ¡Di Hola!
      </a>
    </section>
  );
};

export default Contact;
