package com.perritos;

public class perro {

	// atributos o propedades
	String nombre;
	int edad;
	String raza;
	String tamanio;
	
	//constructor 
	public perro(String nombre) {//el constructor se tiene que nombrar del mismo modo que la clase en java
	this.nombre = nombre;
	
	}
	
	//Metodos 
	
	public void ladrar() {
		System.out.println("El perro " + nombre + " hace guauf!");
	
	}
		
	public int edadperruna() {
		return edad * 7;
	}
		
	 //metodos estaticos
	//permite utilizarlo sin instanciar  un objeto
	public static void mensaje () {
		System.out.println("esta es una clase perro");
	}
	
}
