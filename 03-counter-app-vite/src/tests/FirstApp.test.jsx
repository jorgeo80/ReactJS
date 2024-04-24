import { render } from "@testing-library/react";

describe('Pruebas en FirstApp', () => {
    
    test('debe hacer match con el snapshot', () => {
        
        render( <FirstApp /> );

    });
  
})
