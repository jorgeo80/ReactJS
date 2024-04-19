import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  // Crear un listado de productos
  // Detrno de las [] usaremos destructuring y el primer elemento sera 
  // el objeto que queremos obtener y el segundo una función que agregara o eleminara prods
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: 'Camisa ReactJs', precio: 50},
    {id: 2, nombre: 'Camisa VueJs', precio: 40},
    {id: 3, nombre: 'Camisa Node.js', precio: 50},
    {id: 4, nombre: 'Camisa Angular', precio: 20},
  ]);

  // state para un carrito de compras
  const [carrito, agregarProducto] = useState([])


  // Obtenemos la fecha
  const fecha = new Date().getFullYear();

  return (
    // El fragment lo podemos usar en lugar de meter todo dentro de un div
    <Fragment> 
      <Header 
        titulo='Tienda Virtual'
        numero={20}
      />

      <h3>Lista de Productos</h3>
      {productos.map(producto => (
        <Producto 
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer 
        fecha={fecha}
      />

    </Fragment>
    
  );
}

export default App;
