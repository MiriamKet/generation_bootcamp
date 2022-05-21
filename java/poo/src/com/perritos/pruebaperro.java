package com.perritos;

public class pruebaperro {

	public static void main(String[] args) {
		
		//Instanciar 
		perro perro1 = new perro ("phoo");
		
		
		
		//cambiar sus atributos
		perro1.nombre= "phoo";
		perro1.edad = 7;
		perro1.raza = "criollo";
		perro1.tamanio = "mediano";

		//metodo
		perro1.ladrar();
		
		int edadp = perro1.edadperruna();
		System.out.println(edadp);
		
		
		//sin instanciar, metodo estatico
		perro1.mensaje();
		
		perro perro2 = new perro ("pelos");
		perro2.nombre = "pelos";
		perro2.edad = 12;
		perro2.raza = "husky";
		perro2.tamanio="grande";
		
		perro2.ladrar();
		
		
	}

}
