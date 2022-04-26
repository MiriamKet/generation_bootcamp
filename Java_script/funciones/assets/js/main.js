/* Funciones: permiten reutilizar codigos */
/*let nombre = 'Akezali';true*/
function saludar (nombre = "panchita", apellido = "" ){
    console.log('hola mi nombre es:', nombre, apellido);/* plantillas literales*/
/*console.log(`Hola mi nombre es:${nombre}`);*/
/*console.log(`Hola mi nombre es:${nombre?,'aketzali':"Desconocido"}`); /*operador condicionante, operador ternario*/
return `Mi nombre es ${nombre} ${apellido}`; 
} 

saludar("petra","lopez");
/*saludar("","lopez");  para mostrar solo apellido*/
 let funcionSaludar=('Felipe','vaca')
 console.log(funcionSaludar)
 
 console.log(saludar('alberto','mosca'));

document.write('<h1>este es un h1</h1>');

/* función declarada */
function suma (a,b){
    return a + b;
}
   console.log(suma(10,20));

   /* funciones expresadas / funcion expresion*/
const resta = function(a,b){
    return a - b ;
}
console.log(resta(30,10));
/*hoisting, function, se puede mover su consol.log en cualquier lugar in afectr el resultado, con const es lo contrario no se muestran los resultados en consola*/
 
//Función flecha 
const multiplicacion = (a,b) => {
return a*b ;
}
//const multiplicacion = (a,b) =>a*b ; /*se puede omitir el return y las llaves si solo hay una linea en el codigo*/

console.log(multiplicacion(40,5));


