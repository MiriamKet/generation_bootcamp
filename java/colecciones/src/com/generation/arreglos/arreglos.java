package com.generation.arreglos;

public class arreglos {

	public static void main(String[] args) {
		char[][] arrNumeros;
		//numeracion basada en 0
		arrNumeros[0] = 1;
		arrNumeros [1]= Integer.parseInt("1");
		arrNumeros[2]= 1123;
		arrNumeros[3] = 11323;
		arrNumeros[4] = 123123;

		System.out.println(Arrays.toString(arrNumeros));
		System.out.println(arrNumeros[0]);
	
		//forEach
		int conteo = 0;
		for(int elemento : arrNumeros) {
			conteo++;
			System.out.println("elemento" + conteo " - " );
				
	}		
				
	
	//Arreglo que guarda objetos 
				persona persona1 = new persona("Aket", 23);
				persona persona2 = new persona("Areli", 22);
				
				//Object arrpersona[] = new Object [3];
				
				persona arrpersona [] = new persona[3];
	
	arrpersonas[0] = persona1;
	arrpersonas[1] = persona2;
	arrpersonas[2] = new persona ("juan",25);
	System.out.println(Arrays.toString(arrpersona));

	for(persona elemento : arrpersonas) {
		System.out.println(elemento.nombre + " - " + elemento.edad);
	}
	
	//Arreglos literales : no se puede modificar el tamaño
	String []arrString = {"hola", "mi", "nombre", "es","phoo"};
}
}
