

//const anio = parseInt (prompt("Indica tu año de nacimiento",0))
console.log (anio)

const resta = ((2022) - parseInt(anio));
console.log(resta)
 
alert('Tienes' + ' ' + (resta) +' ' + 'años');

/*nivel 2*/

const anioactual = 2022;
function calcularedad(){
    const anionacimiento = parseInt (document.getElementById("anio"));console.log(anionacimiento);
    console.log(anionacimiento);
    console.log(`Tienes ${anioactual - anionacimiento} años`)
}

/*ni 2 opcion 2*/

const boton = document.getElementById("calcular")
console.log(boton);

boton.addEventListener("click", () =>{
    const anionacimiento = parseInt (document.getElementById("anio").value);console.log(anionacimiento);
    console.log(anionacimiento);
    console.log(`Tienes ${anioactual - anionacimiento} años`)

})



/*Nivel 3 */

const aniioactual = 2022
const mesactual = 4
const diactual = 27

function mostrardatos(){ 
const anionacimiento = document.getElementById("anio").value;
console.log(anionacimiento);
const nacimientodiv = nacimiento.split("-")
console.log(nacimientodiv);
const aniionacimiento = parseInt(nacimientodiv) [0]
const mesnacimiento = parseInt(nacimientodiv) [1]
const dianacimiento = parseInt(nacimientodiv) [2]


if(mesnacimiento <= mesactual && dianacimiento <= diactual){
    console.log(`Tienes ${anioactual - anionacimiento} años`)
}
else {
   
}
console.log(`Tienes ${anioactual - anionacimiento} años`)

/* dato de tipo fecha*/
const fecha = new Date()
const anioaactual = fecha.getFullYear()
console.log(anioaactual)
const mesaatual = fecha.getMonth
console.log(mesaatual)
const diaaactual = fecha.getDay()
console.log(diaaactual);
