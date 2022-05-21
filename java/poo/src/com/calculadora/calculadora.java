package com.calculadora;

public class calculadora { // lo que esta dentro de una clase se llama metodo no funciones

	//void = metodo que no se regresa nada 
	
	public void sumarmensaje() { 
	
	System.out.println( "voy a sumar");
	}
	
	//metodo que retorna datos
	
	public String mensaje() {
		String mensaje = "voy a realizar una operacion";
		return mensaje;
		
	}
	
	public int prueba() {
		return 2;
	}
	
	
	
	//operaciones
	
	public int sumar(int a, int b) {
		return a + b;
		
	}
	
	public int restar (int a, int b) {
		return a - b;
		
	}
	
	public int multiplicacion (int a, int b) {
		return a * b;
		
	}

	
	public double division (double a, double b) {
		if (b != 0) {
			return a / b;
			
		}
		else {
			return -1;
		}
			
		
	}
	
	
	
	
	
	
}
