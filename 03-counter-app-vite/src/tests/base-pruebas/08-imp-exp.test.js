import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
    
    test('gerHeroById --> debe retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
      
    });

    test('gerHeroById --> debe retornar undefined si héroe no existe', () => {

        const id = 10;
        const hero = getHeroeById(id);
        console.log(hero);

        //expect(hero).toBe(undefined);
        expect(hero).toBeFalsy();
      
    });

    test('getHeroesByOwner --> Debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);

        expect(heroes.length).toEqual(3);
      
    });

    test('getHeroesByOwner --> Debe retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);

        expect(heroes.length).toEqual(2);
      
    });

})