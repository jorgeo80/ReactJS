import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {

    test('Prueba en el método getSaludo', () => {
        
        const name = 'Goku';
        const saludo = getSaludo(name);    
        expect(saludo).toBe('Hola ' + name);
    })
    
})
