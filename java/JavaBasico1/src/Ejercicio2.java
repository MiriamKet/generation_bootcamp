import java.util.Scanner;

/*
 * Escribe una aplicación que calcule el indice de masa corporal.

y que lance un mensaje según lo siguiente:

Si tiene un IMC entre 18.5 y 25:
"Your weigh ratio is good"

si es menor de 18.5 o mayor de 25:
"Your weigh ratio is good"

formula
peso (kg) / [estatura (m)]2

 */




public class Ejercicio2 {
	public static void main (String[]args) {
		
		Scanner escaner = new Scanner (System.in);		
		System.out.println("Ingrese su peso");
		int peso  = (int) escaner.nextFloat();
		
		Scanner escaner1 = new Scanner (System.in);		
		System.out.println("Ingrese su estatura");
		int estatura  = (int) escaner1.nextFloat();
		
		int IMC = ((peso/estatura));
		System.out.print(IMC );
	
		
		
		
	}
}
