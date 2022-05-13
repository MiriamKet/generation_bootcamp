import java.util.Scanner;

public class Calculadora {

	public static void main(String[] args) {
		System.out.println("Introduce el numero de la operacion a realizar");
		System.out.println("1) Suma   2) Resta   3) Multiplicacion   4) Division");

		Scanner escaner = new Scanner (System.in);
		int opcion  = (int) escaner.nextInt();

		if(opcion == 1) {
			System.out.println("Introduzca primera cantidad a sumar");
			Scanner esc = new Scanner (System.in);
			int suma1  = (int) escaner.nextFloat();
			System.out.println("Introduzca segunda cantidad a sumar");
			Scanner es = new Scanner (System.in);
			int suma2  = (int) escaner.nextFloat();
			int resultado = (suma1 + suma2);
			System.out.println("El resultado es :" + resultado);
			
			
		
		}else if (opcion ==2) {
			System.out.println("Introduzca primera cantidad a restar");
			Scanner esc = new Scanner (System.in);
			int resta1  = (int) escaner.nextFloat();
			System.out.println("Introduzca segunda cantidad a restar");
			Scanner es = new Scanner (System.in);
			int resta2  = (int) escaner.nextFloat();
			int resultado = (resta1 - resta2);
			System.out.println("El resultado es :"+ resultado);	
			
		}else if (opcion ==3) {
			System.out.println("Introduzca primera cantidad a multiplicar");
			Scanner esc = new Scanner (System.in);
			int multiplo1  = (int) escaner.nextFloat();
			System.out.println("Introduzca segunda cantidad a multiplicar");
			Scanner es = new Scanner (System.in);
			int multiplo2  = (int) escaner.nextFloat();
			int resultado = (multiplo1 * multiplo2);
			System.out.println("El resultado es :"+ resultado);	
			
		}else if (opcion == 4) {
			System.out.println("Introduzca primera cantidad a dividir");
			Scanner esc = new Scanner (System.in);
			int dividendo1  = (int) escaner.nextFloat();
			System.out.println("Introduzca segunda cantidad a dividir");
			Scanner es = new Scanner (System.in);
			int dividendo2  = (int) escaner.nextFloat();
			int resultado =(dividendo1 / dividendo2);
			System.out.println("El resultado es :"+ resultado);	
			
		}
		
	}

}
