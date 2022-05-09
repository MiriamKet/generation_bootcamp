/*importar*/
/*const { default: TestRunner } = require('jest-runner');*/
const {palindrome} = require('../paraprobar');

/*primer test unitario*/
test('palindrome de generation',()=>{
    const resultado = palindrome ('generation');


    /*comparacion del resultado con lo esperado*/
    expect(resultado).toBe('noitareneg')
});



test('palindrome usando un string vacio',()=>{
    const resultado = palindrome ('');


    /*comparacion del resultado con lo esperado*/
    expect(resultado).toBe('')
});


test('palindrome usando un valor undefined',()=>{
   const resultado = palindrome ();


    /*comparacion del resultado con lo esperado*/
    expect(resultado).toBe()

/*para corregir el error y evitar qu el codigo se rompa en caso de qu el usuario dejeun espacio en blanco se agrega una linea en el documento base*/

});