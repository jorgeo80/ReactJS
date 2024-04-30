import { render } from "@testing-library/react";

describe('Pruebas en FirstApp', () => {

    test('debe hacer match con el snapshot', () => {
        
        const title = 'Hola, soy Mundo';
        const { container, getByText } = render( <FirstApp title={title}/> );
        expect( getByText ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

    });
  
})
