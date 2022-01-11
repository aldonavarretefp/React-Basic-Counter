import '@testing-library/jest-dom';

import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';
describe('Pruebas con promesas',()=>{
    test('getHeroeByIdAsync debe retornar un Héroe asíncronamente', (done) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then(heroe => {

                expect(heroe).toEqual(heroes[0]);
                done();
            })
    });

    test('debe obtener un error si el heroe no existe', () => {
        const id = 10;
        return expect(getHeroeByIdAsync(id)).rejects.toMatch('No se pudo encontrar el héroe');
    })
    
});