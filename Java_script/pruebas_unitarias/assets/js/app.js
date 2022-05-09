const suma = (a,b) => {
    return a - b ;
}
/*console.log((suma(1,3)===4));
console.log((suma(5,5)===10));*/

const arr = [
    {a:1,b:3,resultado:4},
    {a:0,b:0,resultado:0}

]

arr.forEach(prueba =>{
    const {a,b,resultado} = prueba; /*destructuracion*/
    console.assert(suma(a,b)===resultado,
    `suma de ${a} y ${b} deberia ser ${resultado}`);
});

/*console.assert(
    suma(1,3)===4,
    'La suma de 1 y 3 deberia ser 4'
);
sirve para hacer una prueba sin hacer uso de un framework*/
/*si la funcion está bien el mensaje no debería aparecer en la consola*/
