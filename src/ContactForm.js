import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    direccion: '',
    correo: ''
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
    <div>
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleSubmit}>
      <img src="/logo.png" alt="Logo de carniceria" />
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />

        <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
        <input type="text" id="apellidoPaterno" name="apellidoPaterno" value={formData.apellidoPaterno} onChange={handleInputChange} required />

        <label htmlFor="apellidoMaterno">Apellido Materno:</label>
        <input type="text" id="apellidoMaterno" name="apellidoMaterno" value={formData.apellidoMaterno} onChange={handleInputChange} required />

        <label htmlFor="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleInputChange} required />

        <label htmlFor="correo">Correo Electrónico:</label>
        <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleInputChange} required />
        
        <label htmlFor="Telefono">Telefono:</label>
        <input type="tel" id="telefono" name="telefono" value={formData.correo} onChange={handleInputChange} required />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;