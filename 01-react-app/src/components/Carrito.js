import React from 'react';
import './carrito.css';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => {
  return(
  <div className="carrito">
    <h2>Tu Carrito de Compras</h2>  
    {carrito.length === 0
    ? <p>No hay elementos en el carrito</p>
    : carrito.map(prodcuto =>(
        <Producto
          key={prodcuto.id}
          producto={prodcuto}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
    ))}
  </div>
  )
}
 
export default Carrito;