package com.generation.colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class colecciones {
public static void main (String []args) {
	
	//ctrl + shift + o  para agregar los paquetes que requieren
	//List - ArrayList
	//picoparentesis 
	System.out.println("\t Set --- HashSet");
	Set<String> miSet = new HashSet<String>();
	List <String> miArray = new ArrayList <String>();
	//no acepta elementos duplicados 
	// no los guarda en un orden especifico
	//la coleccion que funciona más rápidp
	miSet.add("Marta");
	miSet.add("Maria");
	miSet.add("Matias");
	miSet.add("Mariana");
	miSet.add("Marisol"); // no tiene un orden en particular, no se puede tampoco indicar un orden
	miSet.remove("Marisol");
	
	imprimir(miSet);
	System.out.println(miSet.contains("mango"));

	
	miArray.add("mango");
	miArray.add("pui");
	miArray.add("phoo");
	miArray.add(3,"yiyo");
	
	//boolean element = miArray.remove(2);
	String elemento = miArray.remove(1);
	System.out.println(miArray);
	System.out.println(miArray.size()); //length
	System.out.println(elemento);

	imprimir (miArray); //imprimir es un método estático
/*
 * long ==> Long
 * double ==> Double
 * int ==> Integer
 * boolean ==> Boolean
 */

	int num1 = 10;
	Integer num2 = 10;
	
	System.out.println(num2.getClass());
	System.out.println(num2 instanceof Integer); // casi es igual a Typeof
	
	List<Integer> miArray2 = new ArrayList<Integer>();

	miArray2.add(3);
	miArray2.add(3546);
	miArray2.add(6645);
	
//List<int>miArray2 = new ArrayList <int>();

	
	//Map --HashMap 
	//<key/llave,value/valor>
	System.out.println("\t Map --- HashMap");
	
	
	Map<String, Integer>miMap = new HashMap<String,Integer>(); //maneja 2 valores internamente
	miMap.put("Valor 1",45); //para agregar valores a hashmap
	miMap.put("Valor 2",52);
	
	System.out.println(miMap.values()); //Todos los valores
	System.out.println(miMap.keySet()); //Todas las llaves
	
	System.out.println(miMap.get("Valor1"));

	for(String llave: miMap.keySet()) {
		System.out.println(llave + " : " + miMap.get(llave));
	}


}

   public static void imprimir (Collection coleccion) {
	   for(Object elemento : coleccion) {
		   System.out.println("Elemento =" + elemento);
	   }
   }


}
