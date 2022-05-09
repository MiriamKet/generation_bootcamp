const url = "https://dog.ceo/api/breeds/list/all"
fetch(url).then(resp => resp.json()).then(datos => {
    console.log(datos.message.terrier);
}

const arregloTiposTerrier = datos.message.terrier
console.log(arregloTiposTerrier);

arregloTiposTerrier.foreach((tipoTerrier) => {
 const template =  `<li class="list-group-item">${tipoTerrier}</li>`
lista.inneHtml += template 

}) 