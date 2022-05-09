//let tiempo = 3000
/*let  datos
setTimeout(()=>{
    console.log("ejecutando codigo despues de 3 segundos")
},3000 /*tiempo*//*)

console.log("hola");

setTimeout(() => {
    datos = "miriam"
    console.log(datos);
}, tiempo);

console.log(datos); */


const datos = [
    {
nombre: "miriam",
edad:23
    },

    {
    nombre: "phoo",
    edad:50
    },
    {
        nombre: "mango",
        edad:10
    }

]


/*function obtenerdatos(){
    return new promise((resolve,reject)) => {
    setTimeout(()=>{
resolve (datos)
    },3000)
   
 })
}

/*console.log(obtenerdatos());

obtenerdatos().then((datos)) => {
console.log(datos);
}) */

async function ObtenerDatosAsync (){
    const datosObtenidos = await obtenerdatos()
console.log(datosObtenidos);
}

ObtenerDatosAsync()
