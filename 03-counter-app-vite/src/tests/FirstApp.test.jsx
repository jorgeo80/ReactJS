import { render } from "@testing-library/react";

describe('Pruebas en FirstApp', () => {

    test('debe hacer match con el snapshot', () => {
        
        const title = 'Hola, soy Mundo';
        render( <FirstApp title={title}/> );

    });
  
})
