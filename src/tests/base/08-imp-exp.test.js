import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
describe('Pruebas en funciones de héroes',()=>{
    test('debe retornar un heroe por id',()=>{
        const heroeId = 1;
        const heroe = getHeroeById(heroeId);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });
    test('debe retornar undefined si el heoroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    })

    test('debe retornar solo los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroes).toEqual(heroesData);
    })

    test('debe retornar solo los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
    });
    
    
});