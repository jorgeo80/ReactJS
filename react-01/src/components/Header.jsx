import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';

function Header(props) {
  //const edad = 18
  //let mensaje;
  //if(edad >= 18) {
  //  mensaje = 'Eres mayor de edad'
  //} else { 
  //  mensaje = 'Eres menor de edad'
  //}
  console.log(props)
  
  return (
    // Si usas Llaves {} dentro de ellas puedes poner el nombre de la variable
    // para que corra
    // Siempre que se quieren crear clases se debe de usar className en lugar
    // de class, ya que class es una palabra reservada de js
  <h1 id="encabezado01" className="ecabezado">{props.titulo}</h1>
  );
}

export default Header;