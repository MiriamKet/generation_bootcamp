/*${} interpolacion*/

const db = [
  {
    url: "https://placeimg.com/200/200/animals",
    title: "animales",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/tech",
    title: "tecnologia",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },

  {
    url: "https://placeimg.com/200/200/people",
    title: "personas",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },

  {
    url: "https://placeimg.com/200/200/nature",
    title: "naturaleza",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },

  {
    url: "https://placeimg.com/200/200/arch",
    title: "arquitectura",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
];

console.log(db[0].url);

const $cards = document.getElementById("cards");
$cards.innerHTML = "";

db.forEach((objeto) => {
  /*console.log(objeto);*/
  $cards.innerHTML += `
    <div class="col mb-4">
<div class="card">
  <img src="${objeto.url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${objeto.title}</h5>
    <p class="card-text">${objeto.description}</p>
  </div>
</div>
</div>
`;
});

console.log(db);




//JSON

console.log(dbJSON);

//stringify : convertir un objeto json a un string|| cadena de texto 

const dbJSON = JSON.stringify(db)

//parse : para convertir nuevamente a un objeto Json
const dbJSON = JSON.parse(dbJSON); 
//convierte una cadena de texto a un objeto de tipo JSON