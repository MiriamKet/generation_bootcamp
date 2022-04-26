window.addEventListener('keypress', registro)

const $lin =document.getElementById('lin')
document.getElementById('reset').addEventListener('click',() => {
    $lin.textContent='';
    console.clear()
})

function registro(e){
    console.log(e.key,e.keycode,e.code)
    $lin.textContent +- e.key + '' +e.keyCode + ''+e.code+'    ';
}