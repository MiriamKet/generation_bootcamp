package com.generation.excepciones;

public class Excepciones {

	public static void main(String[] args) {
	
		int num1 = 10;
		int num2 = 0;
		
		float division = num1 / num2 ;
		
	//try-catch-finally
		try {
			//código qu vamos a probar
			division = num1 / num2;	
		}catch(ArithmeticException ex) {//la excepcion que se va a observar
			//se escribe lo qu se va a realizar cuando se detecte una excepción
		division = 1;
			System.out.println("Error:" + ex.getMessage());
		}finally {
			System.out.println("el valor de la division:" + division);
			//tiene el proposito de ejecutar un codigo más (no es necesario)
		}
		
		
		
	}

}
