const idInf = window.location.href.split("=").pop() 
console.log(idInf);

const urlId = `https://api.jikan.moe/v4/anime/${idInf}`

fetch (urlId).then(resp => resp.json()).then(datos => {
    console.log(datos.data);
    const datosNecesarios ={
        id:datos.data.mal_id,
        imagen:datos.data.images.jpg.image_url,
        sinopsis:datos.data.synopsis,
        nombre:datos.data.title 
    }

   const templateImg = `<img scr = ${datosNecesarios.imagen} alt="" class="img-fluid">`
  imagenPortada.innerHTML = templateImg

  /*insertar informacion*/
  
  const templateInf = `<h1>${datosNecesarios.nombre}</h1>
  <p>${datosNecesarios.sinopsis}</p>
  <div class = "favorito">
  <button id="agregarFavorito" type="button" class="btn btn-dark">Agregar a favoritos</button>
  </div> `

    console.log(datosNecesarios);




  const agregarFavoritos = document.getElementById("agregarFavoritos")
  console.log(agregarFavoritos);

  agregarFavoritos.addEventListener("click",() => {
console.log("agregado");
  const datos ={
      id:datosNecesarios.id,
      nombre:datosNecesarios.nombre,
      imagen:datosNecesarios.imagen
  }

if (localStorage.getItem("favoritos")) {
    console.log("existe un elemento");
    const favoritos = JSON.parse(localStorage.getItem("favoritos"))
    favoritos.push(datos)
    localStorage.setItem("favoritos",JSON.stringify(datos))
}
else{
    console.log("no tienes favoritos");
    const favoritos=[]
    favoritos.push(datos)
    localStorage.getItem("favoritos")


    localStorage.setItem("favoritos",JSON.stringify(datos))
  console.log(datos);
}

  
 

})

})