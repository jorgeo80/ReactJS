import React from 'react';


// usaremos distruturing para los props de este componente
const Footer = ({fecha}) => {
  // Si usas este tipo de funciones puedes omitir las llaves y el return
  // solo con los parentesis se tomara como si fuera el return directo
  return (
    <footer>
      <p>Todos los derechos reservados &copy; {fecha}</p>
    </footer>
    );
}
 
export default Footer;