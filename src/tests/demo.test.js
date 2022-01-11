

describe('Pruebas dentro del archivo demo',()=>{
    test('deben ser iguales los strings', () => {
        const mensaje = "Hola Mundo";
        const mensaje2 = `Hola Mundo`;
    
        expect(mensaje).toBe(mensaje2);    
    })
});