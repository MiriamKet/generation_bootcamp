const $padre = document.querySelector(".padre");
/* 
# para llamar un ID
. para llamar una clase
*/

/*forma más correcta*/

/* += para que se agreguen los elementos en vez de susttuir*/
const $parr = document.createElement("p")
$parr.textContent = "lorem ipsum"
$parr.textContent += "lorem ipsum"
$padre.appendChild($parr);

/* Agregar elementos con innerhtml */

const $cuadro = document.querySelector('.cuadro');
$cuadro.innerHTML=''; /*iniciar el contenido del elemento */

$cuadro.innerHTML = `
<a href="#"> este es un enlace</a> 
<ol>

  <li>elemento 1</li>  
  <li>elemento 2</li>
  <li>elemento 3</li>

</ol>
`;

const estaciones = ['primavera','verano','otoño','invierno'];
const $lista = document.createElement('ul');
estaciones.forEach(elemento =>{
    /*console.log(elemento);*/
const $li = document.createElement('li');
$li.textContent = elemento;
$lista.appendChild($li);

});

document.body.appendChild($lista);
$cuadro.appendChild($lista)


const continentes = [`africa`,`america`,`asia`,`europa`,`oceania`];
const $ol = document.createElement('ol');
$cuadro.appendChild($ol);
continentes.forEach(continente => {$ol.innerHTML +=`<li>${continente}</li>`});