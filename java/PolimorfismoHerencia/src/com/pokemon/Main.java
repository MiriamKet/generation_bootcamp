package com.pokemon;

public class Main {

	public static void main(String[] args) {
	
		//Instanciar
		Pokemon chikorita = new Pokemon(151,1,20,"chikorita",false);
		
		//utilizando los metodos de instancia
		chikorita.atacar();
		chikorita.atacar();
		chikorita.dormir();

		TipoPlanta chikorita2 = new TipoPlanta (151,1,20,"Chikorita",false,1);
	
		System.out.println("---------------");
		
		chikorita2.comer();
		chikorita2.atacar();
		chikorita2.dormir();
		chikorita2.envenenar();
		chikorita2.paralizar();
	
	
		
	
	}

}
