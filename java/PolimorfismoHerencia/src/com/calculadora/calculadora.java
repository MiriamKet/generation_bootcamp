package com.calculadora;

public class calculadora {

	//atributos o propiedades
	private int a;
	private int b;
	private int c;
	private int resultado;
	
	
	//constructor
	public calculadora (int a, int b) {
		this.a = a;
		this.b = b;
	
	}
	
	public calculadora (int a, int b, int c) {
		this.a = a;
		this.b = b;
		this.c = c;	
	}
	
	
	//metodo
	public void sumar (int a, int b) {
		resultado = a + b;
		System.out.println("El resultado de la suma es :" + resultado);
	}

	
	public void sumar (int a, int b, int c) {
		resultado = a + b + c;
		System.out.println("El segundo resultado de la suma es :" + resultado);
	}
	
	
	
	//getters y setters
	public int getA() {
		return a;
	}

	public void setA(int a) {
		this.a = a;
	}

	public int getB() {
		return b;
	}

	public void setB(int b) {
		this.b = b;
	}

	public int getResultado() {
		return resultado;
	}

	public void setResultado(int resultado) {
		this.resultado = resultado;
	}
	
}
