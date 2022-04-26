const invertir = (palabra = "") => {
    if(palabra.length <= 1 ){ return console.warn('no ingresaste texto');

if(typeof(palabra) !== 'string')return console.error('el valor ingresado no es una palabra');

    
    let arreglo = palabra.split("");
    let reverso =arreglo.reverse();
   let unir = reverso.join("");
    console.log(unir);
    return console.log(unir)

}
invertir('hola mundo');
