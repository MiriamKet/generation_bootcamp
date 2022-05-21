package com.generation.test;

import com.generation.model.Perro;

public class PruebaPerro {

	public static void main(String[] args) {
		Perro phoo = new Perro("phoo","criollo","mediano", 7,"cafe");
	
		
		Perro mango = new Perro ("mango","chihuahua","pequenio",3,"negro");
		
				phoo.setHumano("Miriam");
		        mango.setHumano("Roberta");
		
		System.out.println(phoo);
			phoo.comer();
			
			System.out.println(Perro.buscarHumano(2));
			
	}

	
	
	
	
}
