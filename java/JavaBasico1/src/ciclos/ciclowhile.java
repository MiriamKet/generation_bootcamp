package ciclos;

import javax.swing.JOptionPane;

public class ciclowhile {

	public static void main(String[] args) {
		//while
		/*
		int condicion = 0;
		
		while(condicion < 5) {//mientras que 
			System.out.println("hola");
			
			condicion++;
		}
        */
		
		//verificar contraseņa 
		
		String clave = "phoo";
		String comparacion = "";
		
		
		//equals sirve para comparar
		while(clave.equals(comparacion) == false) {
			
			comparacion = JOptionPane.showInputDialog("Intrduce la contraseņa"); //para mostrar un enunciado como el input
			
		}if(clave.equals(comparacion)== false) {
			System.out.println("la contraseņa es incorrecta");
			
		
		
		}
		
		System.out.println("la contraseņa es correcta");
		
		
		
	}
	
	
	
	
		
	


	
