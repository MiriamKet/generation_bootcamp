/*con la primer letra en mayúscula cuandose declara una clase*/
/* no se utlizan las variables para declarar*/
class Persona {
    /*atributos = variables que van a conener los datos del objeto*/
/*nombre= 'Phoo' ; (encapsulamiento)*/
#id= 0;
static #contador= 0;
nombre= 'Phoo' ;
edad='0' ;
correo= '' ;


/*permite que las nuevas personas se modifiquen*/
constructor(nombre,edad,correo){
   /*se debe poner la palabra this, para que se tomen los valores que se asgnan*/
   /*this.#nombre=nombre;(principio de encapsulamiento*/ 
   this.nombre=nombre;
    this.edad=edad;
    this.correo=correo;
    this.#id=++this.#contador;
    this.#id = ++Persona.#contador;
}
    

//Setters metodos/funciones :set & get// : sirven para fijar y obtener tener acceso a elementos privados 
    // se usan como si fueran atributos 
get nombre(){
    return this.#nombre;

    /*para mostrar*/
   /* console.log(persona1.nombre);*/
   
   /*para modificar*/
   
  /* set nombre (this.nombre){
        this. #nombre = nombre;
       }
       
       persona1.nombre = 'abc'
       console.log(persona1); */

    }


/* instancia de la clase persona*/
const persona1 = new Persona('mango',1,'mango@gmail.com');
const persona2 = new Persona('pui',2,'pui@gmail.com');
const persona3= new Persona('arely,23,arely@gmail.com');



console.log(persona1);
console.log(persona2);
console.log(persona1.contador);

saludar(){
    let mensaje = `hola mi nombre es ${this.#nombre};`
    return mensaje;
}


/*metodo privado ejemplo*/
#saludar(){
    let mensaje = `hola mi nombre es ${this.#nombre};`
    return mensaje;
}

mostrarSaludo(){
    return this.#saludar()
}

static mostrarContador(){
    return Persona.#contador;
}

console.log(Persona.mostrarContador());

console.log(persona2.mostrarSaludo);

/*fin de metodo privado*/

console.log(persona1.saludar());
console.log(persona2.saludar());
    
}

//EJERCICIO
class objeto{
#edad='7' ;
#correo= 'ejemplo@gmail.com' ;
}

this.#edad = edad;
this.#correo = correo;


get correo(){
    return this.#correo;
}

get edad(){
    return this.#edad;
}

set correo (this.correo){
    this. #correo = correo}

    set edad (this.edad){
        this. #edad = edad}






