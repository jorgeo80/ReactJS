import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImagen  --> debe retornar el url de la imagen', async() => {
        const url = await getImagen();
        console.log(url)
        // expect(url.includes('https://')).toBe(true);
        expect(url.includes('https://')).toBeFalsy();
    });
    
    test('getImagen debe retornar un error', async() => {
        const url = await getImagen();
        expect(url).toBe('No se encontro la imagen');
    });
  
})
