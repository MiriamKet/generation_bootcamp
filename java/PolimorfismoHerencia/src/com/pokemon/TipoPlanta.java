package com.pokemon;

public class TipoPlanta extends Pokemon {

	
	//atributos
	private int numeroHojas;
	
	//constructor
	public TipoPlanta(int id, int edad, int nivel,String nombre,boolean evolucion,int numeroHojas) {
		super(151,1,20,"Chikorita",false);
	this.numeroHojas = numeroHojas;
	}
	
	
	
	//metodos
	public void paralizar () {
		System.out.println(getNombre() + " Esta paralizando");
	}
	
	public void envenenar () {
		System.out.println(getNombre () + " Esta envenenando");
	}
	
	

	//getters y setters
	public int getNumeroHojas() {
		return numeroHojas;
	}


	public void setNumeroHojas(int numeroHojas) {
		this.numeroHojas = numeroHojas;
	}
	
}
