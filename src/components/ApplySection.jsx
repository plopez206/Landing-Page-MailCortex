import React, { useState } from 'react';
import supabase from '../supabaseClient';  // Asegúrate de importar tu configuración de Supabase

const ApplySection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Guardar el correo en Supabase
    const { data, error } = await supabase
      .from('emails')
      .insert([
        { email, date: new Date().toISOString() }
      ]);

    if (error) {
      console.error('Error al guardar el correo:', error);
      alert('Hubo un problema al guardar el correo.');
    } else {
      alert('¡Gracias por registrarte! El correo se ha guardado.');
    }
  };

  return (
    <section id="apply" className="py-5 bg-primary text-white">
      <div className="container">
        <h2 className="text-center mb-4">Get Early Access</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-light btn-lg w-100">Apply Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;
