import { getImagen } from '../../base/11-async-await';
describe('Test llamadas API',()=>{
    test('debe retornar el url de la imagen',async () => {
        const url = await getImagen();
        console.log(url);
        expect(url.includes('https://')).toBe(true);
    })
});