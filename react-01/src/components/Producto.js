import React from 'react';

const Producto = ({producto, carrito, productos, agregarProducto}) => {

  const {nombre, precio, id} = producto

  // Agregar producto al carrito
  const seleccionarProducto = id => {
    const producto = productos.filter(producto => producto.id === id)[0];
    // console.log(producto[0])
    agregarProducto([
      ...carrito,
      producto
    ])
  }

  // Eliminar un producto del carrito
  const eleminarProducto = id =>{
    const productos = carrito.filter(producto => producto.id !== id);
    // Colocar los productos en el state
    agregarProducto(productos)
  }

  return ( 
    <div>
      <h4>{nombre}</h4>
      <p>${precio}</p>
      {productos
      ? 
        (
          <button
            type="button"
            onClick={ () => seleccionarProducto(id) }
          >Comprar</button>
        )
      :
        (
          <button
            type="button"
            onClick={ () => eleminarProducto(id) }
          >Eliminar</button>
        )
    }
    </div>
  );
}
 
export default Producto;