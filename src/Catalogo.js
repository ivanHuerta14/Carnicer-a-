import React from 'react';
//import './Catalogo.css'; // Agrega estilos según sea necesario
import Nav from './Nav'; 
import './PurchaseSummary.css'; // Agrega estilos según sea necesario
// Dummy data para productos
import './Catalogo.css'; // Agrega el nuevo archivo de estilos
const productos = [
  { id: 1, nombre: 'Producto 1', Descripcion: ' Detalle del producto', precio: 10, imagen: '/logo.png' },
  { id: 2, nombre: 'Producto 2', Descripcion: ' Detalle del producto',precio: 20, imagen: '/logo.png' },
  { id: 3, nombre: 'Producto 3', Descripcion: ' Detalle del producto',precio: 30, imagen: '/logo.png' },
  { id: 4, nombre: 'Producto 4', Descripcion: ' Detalle del producto',precio: 15, imagen: '/logo.png' },
  { id: 5, nombre: 'Producto 5', Descripcion: ' Detalle del producto',precio: 25, imagen: '/logo.png' },
  { id: 6, nombre: 'Producto 6', Descripcion: ' Detalle del producto',precio: 35, imagen: '/logo.png' },
  { id: 7, nombre: 'Producto 7', Descripcion: ' Detalle del producto',precio: 12, imagen: '/logo.png' },
  { id: 8, nombre: 'Producto 8', Descripcion: ' Detalle del producto',precio: 22, imagen: '/logo.png' },
  { id: 9, nombre: 'Producto 9', Descripcion: ' Detalle del producto',precio: 32, imagen: '/logo.png' },
  { id: 9, nombre: 'Producto 10', Descripcion: ' Detalle del producto',precio: 32, imagen: '/logo.png' },
];

const Producto = ({ id, nombre, Descripcion,precio, imagen }) => (
 
     <div class="card">
  <div className="producto">
    <img src={imagen} alt={nombre} className="imagen-producto" />
    
    <h3>{nombre}</h3>
    <p>Descripcion:{Descripcion}</p>
    <p>Precio: ${precio}</p>
    {/* Puedes agregar más detalles del producto aquí si es necesario */}
    <button className="button" onClick={() => console.log(`Producto seleccionado: ${nombre}`)}>
      Añadir
    </button>
  </div>
  </div>
  
);

const Catalogo = () => (
  <div>
     <Nav /> {/* Agrega el Navbar aquí */}
  <div className="catalogo">
    {productos.map((producto) => (
      <Producto key={producto.id} {...producto} />
    ))}
  </div>
  </div>
);

export default Catalogo;