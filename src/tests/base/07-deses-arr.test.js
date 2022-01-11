import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en desestructuracion',()=>{
    test('debe retornar un arreglo', () => {
       const arr = retornaArreglo(); //['ABC', 123];
        const [ letras, numeros ] = arr;
       expect(letras).toBe('ABC');
       expect(numeros).toBe(123);
       expect(arr).toEqual(['ABC', 123]);
       expect(typeof letras).toBe('string');
       expect(typeof numeros).toBe('number');
    });
});