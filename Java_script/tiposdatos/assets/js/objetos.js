const nombre = "Aketzali"
console.log(nombre);
const nombre2 = new String ("Miriam")
console.log(nombre2);

const persona = new object ();
persona.nombre = "miriam"
persona.edad = "23"
persona.apellido = "gonzález"

console.log(persona);

/*opcion 2 declaración de un objeto*/

const miriam ={
    /* atributos o propiedades: datos*/
    nombrecompleto:{ 
    nombre: "aketzali",apellido: "gonzalez" 
},
    edad: "23",
    pasatiempos:["pintar","leer","escribir"],
    tienetrabajo:true,
    saludar: function(){
        console.log("hola")
    }


}
console.log(nuevapersona);

"hola".length /* atributo o propiedad*/
hola.toLowerCase() /*metodo */

console.log(nuevapersona.edad)
console.log(nuevapersona.nombrecompleto.nombre)
console.log(nuevapersona.pasatiempos[1])


/* para cambiar el valor */
nuevapersona.edad=10
console.log(nuevapersona);

/* agregar nuevo atributo */
nuevapersona.colorfavorito = "blanco"
console.log(nuevapersona);

console.log(nuevapersona.hasOwnProperty("edad"))
console.log(object.keys(nuevapersona));
console.log(Object.values(nuevapersona))


const santiago = {
    nombreCompleto: {
        nombre:"carlos",
    apellido:"cruz",
    },
    edad: 29,
    pasatiempos: ["futbol", "estudiar", "anime"],    
    }


    const Daniel = {
        nombreCompleto: {
            nombre: "Daniel",
            apellido: "Perez",
        },
        edad: 24,
        pasatiempos: ["fotografia", "peliculas", "leer"],
    }

    const Luis = {
        nombreCompleto: {
          nombre: "Luis",
          apellido: "García",
        },
        edad: 23,
        pasatiempos: ["series", "ejercicio", "dormir"],
      };

      const cohorte12 = [Luis,Daniel,santiago]
      console.log(cohorte12);

      for(let i=0; i<cohorte12.length;i++){
          console.log(cohorte12[i].pasatiempos)
      }