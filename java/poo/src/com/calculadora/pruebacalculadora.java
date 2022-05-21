package com.calculadora;

import java.util.Scanner;

//solo puede haber un metodo main
public class pruebacalculadora {

	public static void main(String[] args) {
		System.out.println("vamos a calcular");

		//instanciar  - crear un objeto a partir de una clase
		calculadora cal = new calculadora();
		
	//metodo no retorna nada
		cal.sumarmensaje();
		
		//metodo que regresa un valor 
		String mensaje = cal.mensaje();
		System.out.println(mensaje);
		
	   double prueba = cal.prueba();
	   System.out.println(prueba);
	   
	   //metodos con parametros 
	   int suma = cal.sumar(7, 23);
	   System.out.println(suma);
	   
	   int resta = cal.restar(20, 3);
	   System.out.println(resta);
	   
	   
	   //instanciar === para llamr la clase y ulizar sus metodos 
		areas calareas = new areas ();
		
		calareas.mensaje();
		
		int areac =calareas.areacuadrado(10);
		System.out.println(areac);
		
		double areat = calareas.areatriangulo(5, 2); //debe ser acorde a lo que se escribio
		System.out.println(areat);
	}

}
