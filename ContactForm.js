import React, { useState } from 'react';
import './App.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    direccion: '',
    correo: '',
    password: '',
    Telefono: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar el código para manejar el envío del formulario
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
      <img src="/logo.png" alt="Logo de carniceria" />
        
        <input type="text" id="nombre" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleInputChange} required />

        
        <input type="text" id="apellidoPaterno" name="apellidoPaterno" placeholder="Apellido Paterno" value={formData.apellidoPaterno} onChange={handleInputChange} required />

        
        <input type="text" id="apellidoMaterno" name="apellidoMaterno" placeholder="Apellido Materno" value={formData.apellidoMaterno} onChange={handleInputChange} required />

        
        <input type="text" id="direccion" name="direccion"  placeholder="Dirección" value={formData.direccion} onChange={handleInputChange} required />

        
        <input type="email" id="correo" name="correo"   placeholder="Email" value={formData.correo} onChange={handleInputChange} required />
        <input type="Pass" id="Password" name="Password" placeholder="Password" value={formData.correo} onChange={handleInputChange} required />
        
        <input type="tel" id="telefono" name="telefono" placeholder="Telefono" value={formData.correo} onChange={handleInputChange} required />

        <button type="submit">Enviar</button>
      </form>
      </header>
    </div>
  );
}

export default ContactForm;