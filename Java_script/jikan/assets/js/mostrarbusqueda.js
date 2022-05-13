const busquedaInf = window.location.href.split("=")[1];
console.log(busquedaInf);
const busquedaAnimes = document.getElementById("busquedaAnimes");

const urlBusqueda = `https://api.jikan.moe/v4/anime?q=${busquedaInf}&order_by=popularity`;
fetch(urlBusqueda)
  .then((resp) => resp.json())
  .then((datos) => {
    console.log(datos.data);
    const resultadosBusqueda = datos.data;
    resultadosBusqueda.forEach((resultado) => {
      console.log(resultado);

      const datosNecesarios = {
        nombre: resultado.title,
        imagen: resultado.images.jpg.image_url,
        id: anime.mal_id,
        sinopsis:anime.synopsis,
      };

      const template = `<div class="col mb-4">
                        <a href="informacion.html?id=${datosNecesarios.id}">
                          <div class="card">
                            <img src="${datosNecesarios.imagen}" class="card-img-top" alt="...">
                            <div class ="card-body">
                            <h5 class ="card-title>${datosNecesarios.nombre}</h5>
                            </div>
                          </div>
                        </a>
                        </div>`;

      busquedaAnimes.innerHTML += template;

      console.log(datosNecesarios);
    });
  });
