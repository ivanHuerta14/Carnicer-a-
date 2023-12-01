// PurchaseSummary.js
import './App.css';
import React from 'react';
import Nav from './Nav'; 
import './PurchaseSummary.css'; // Agrega estilos según sea necesario

const PurchaseSummary = ({ producto }) => (
  
  <div>
    <Nav /> {/* Agrega el Navbar aquí */}
    
  <div class="contenedor">
     <div class="card">
  <div className="purchase-summary">
    <img src={producto.imagen} alt={producto.descripcion} className="product-image" />
    <div className="product-details">
      <p>{producto.descripcion}</p>
      <p>Cantidad: {producto.cantidad}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Total: ${producto.total}</p>
      
    </div>
    <button className="regresar" onClick={() => handleCompra(producto)}>
      Atras
    </button>
    <button className="buy-button" onClick={() => handleCompra(producto)}>
      Pagar
    </button>

    <button className="borrar-button" onClick={() => handleCompra(producto)}>
      Borrar
    </button>
  </div>
  </div>
  </div>
  </div>
  
);
const handleCompra = (producto) => {
 
      
      
  // Lógica para manejar la compra, por ejemplo, redirigir a una página de compra
  console.log(`¡Producto comprado! ${producto.descripcion}`);
  // Aquí podrías agregar la lógica adicional, como redirigir a una página de compra, enviar datos a un servidor, etc.

};

export default PurchaseSummary;