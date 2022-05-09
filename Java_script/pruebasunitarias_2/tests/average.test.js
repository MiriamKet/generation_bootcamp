const{average} = require ('../paraprobar');
describe('average',() => {
test('ingresar un valor',()=>{
    const resultado = average ([1]);
    expect(resultado).toBe(1);
})

/////////////////////////
test('ingresar un solo valor',()=>{
    expect(average([1])).toBe(1);
})

test('ingresando multiples valores',()=>{
    expect(average([1,2,3,4,5,6])).toBe(3.5);
})



/*crear un test para probar un valor undefined*/
/*expect(average()).toBeUndefined()*/

test('probando valor undefined', () => {
expect(average()).toBeUndefined();
})








})
