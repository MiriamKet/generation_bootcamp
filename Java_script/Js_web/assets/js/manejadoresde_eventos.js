/*manejador de eventos global */
window.addEventListener('load', function(){
    this.alert('se ha terminado de cargar la pagina');
})



function saludar (){
    alert('Hola');
}

/* manejador de eventos semanticos (una sola función)*/
const $boton_semantico = document.getElementById('evento-semantico');
$boton_semantico.onclick = saludar;

$boton_semantico.onclick = function (e){ //e = evento
    alert('Hola desde un manejador semantico');
}

/* manejador de eventos multiples (varias funciones,eventos) */
const $boton_multiple = document.getElementById ('evento-multiple');
$boton_multiple.addEventListener('click',function(evento){
    alert('Hola desde manejador multiple');
console.log(evento.target);
});
$boton_multiple.addEventListener('click',function(evento){
console.log(evento.target);
});



function saludarMultiple(){
    alert('hola desde manejador multiple');
}

