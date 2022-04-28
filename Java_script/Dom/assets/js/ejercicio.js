const $card = document.querySelector('.card');
const $form = document.querySelector('form');

$form.addEventListener('submit',() => {
   e.preventDefault();
   
   
    const datos = Object.fromEntries(
        new FormData(e.targert)
    )

    crearElemento(datos.url,datos.texto);
    
});

crearElemento(url.texto){
    const img = document.createElement('img');
    const txt = document.createElement('figcaption');
    img.src = url;
    img.alt = texto;

    //apendchild

    $card.appendChild(img);
    $card.appendChild(txt);
}      

