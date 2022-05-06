class pokemon{
    /*atributos*/
    #nombre = "";
    #edad = 0;
    #evolucion;
  /* #tipo = "";*/
constructor(nombre,edad,evolucion,tipo){
this.#nombre = nombre;
this.#edad= edad;
this.#evolucion=evolucion;
/*this.#tipo=tipo;*/
}

/*get nombre(){
    return this.#nombre*/

atacar(){
    return console.log(`${this.#nombre}, está atacando`);
}



evolucionar(){
   /*operador de corto circuito
   false => toma el valor de lo que hay a la izquierda
   true => toma el valor de lo que hay a la derecha
   */
    const evolucion = this.#evolucion;
    let mensaje = 'no puedo evolucionar';
    if (evolucion){
        mensaje = `${this.#nombre} ha evolucionado`;
        this.#nombre = evolucion;
    }

    return console.log(mensaje);
}


}

/*const eevee = new pokemon ('eevee',2,"vaporeon","normal");
const bulbasaur = new pokemon ("bulbasaur",1,"ivisaur","planta");*/

/*console.log(eevee);
console.log(bulbasaur);

eevee.atacar();
bulbasaur.atacar();

eevee.evolucionar();*/


/* clase hija */
class tipoFuego extends pokemon{ /*extends : se toman los atributos*/
#tipo = "";
constructor(nombre,edad,evolucion,tipo){
    super(nombre,edad,evolucion);
    this.#tipo = 'fuego'
}




atacar(){
    return console.log(`${super.nombre}, está lanzando un ataque de tipo ${this.#tipo}`);
}
}

const vulpix =new tipoFuego ('vulpix',2,"ninetales");
console.log(vulpix);
vulpix.atacar();