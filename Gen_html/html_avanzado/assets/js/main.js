const color = document.querySelector("#inputColor")
color.addEventListener("change", function  (e) {document.body.style.backgroundColor= e.target.value;})





const formulario = document.querySelector("#formularioDatos")
console.log(formulario)

formulario.addEventListener("submit",function(e){
    e.preventDefault()
    const datos = object.fromEntries(
        new FormData(e.target)
    )
    console.log(datos)
})