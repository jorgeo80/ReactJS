import { usContext } from "../../base-pruebas/06-deses-obj";

describe('Pruebas en <06-deses-obj />', () => {

    test('usContext --> Debe de retornar un objeto', () => {
        
        const clave = 'Goku';
        const edad = 20;
        const user = usContext({clave, edad});

        expect(user).toStrictEqual({
            nombreClave: 'Goku',
            anios: 20,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

    });
  
})