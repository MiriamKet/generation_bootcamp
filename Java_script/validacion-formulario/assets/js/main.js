const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario =document.querySelector("form")
/*console.log(formulario);*/
const inputs = document.querySelectorAll("input")

const nombreError = document.querySelector("#errorNombre");
const apellidoError = document.querySelector("#errorApellido");
const emailError = document.querySelector("#errorEmail");
const passwordError = document.querySelector("#errorPassword");
const telefonoError = document.querySelector("#errorTelefono");

/*console.log(telefonoError);*/

const statusInf ={
	nombre:false,
	apellido:false,
	email:false,
	password:false,
	telefono:false
}



/*console.log(inputs);*/
inputs.forEach((input,i,inputscompleto)=>{ // foreach es para recorrer todo el arreglo, en vez de poner limitaciones
console.log(input);
input.addEventListener("keyup",(e)=>{
/*console.log(e.target.name);*/

switch(e.target.name){
	case "nombre":
		console.log(e.target.value);
if(expresiones.nombre.test(e.target.value)){
/*console.log("nombre correcto")*/
nombreError.textContent = ""
statusInf.nombre = true
}else{
	/*console.log("nombre incorrecto")*/
	nombreError.textContent = "Error"
	statusInf.nombre = false
}


		break
		case "apellido":
			if(expresiones.nombre.test(e.target.value)){
				/*console.log("apellido correcto")*/
				apellidoError.textContent = ""
				statusInf.apellido = true
				}else{
					/*console.log("apellido incorrecto")*/
					apellidoError.textContent = "Error"
					statusInf.apellido = false
				}
				
        break
		case "email":
			if(expresiones.email.test(e.target.value)){
			/*	console.log("email correcto")*/
				emailError.textContent = ""
				statusInf.email = true
				}else{
					/*console.log("email incorrecto")*/
					emailError.textContent = "Error"
					statusInf.email = false
				}
				
		break
		case "password":
			if(expresiones.password.test(e.target.value)){
				/*console.log("password correcto")*/
				passwordError.textContent = ""
				statusInf.password = true
				}else{
					/*console.log("password incorrecto")*/
					passwordError.textContent = "Error"
					statusInf.password = false
				}
				
		break
		case "telefono":
			if(expresiones.telefono.test(e.target.value)){
				/*console.log("telefono correcto")*/
				telefonoError.textContent = ""
				statusInf.telefono = true
				}else{
					/* console.log("telefono incorrecto")*/
					telefonoError.textContent = "Error"
					statusInf.telefono = false
				}
				
		break


	}

})


 })


formulario.addEventListener("submit",(e)=>{
e.preventDefault(); //para que no se recargue la pagina sin mostrar datos en la consola
/*console.log(Object.values(statusInf));
console.log(Object.values(statusInf).includes(false));*/
const check =document.querySelector("#terminos").checked
console.log(check)

if(!Object.values(statusInf).includes(false) && check == true){
	console.log("enviado");
	document.querySelector(".alert-danger").style.display="none"
	const datos = Object.fromEntries(
		new FormData(e.target)
	)
	console.log(datos)
	formulario.reset()


}else
console.log("no enviado");
document.querySelector(".alert-danger").style.display="block"

})
