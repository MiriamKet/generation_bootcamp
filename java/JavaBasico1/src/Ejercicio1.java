import java.util.Scanner;

/*Crear una aplicaci�n que reciba un int entre 1 y 10 y que regrese un mensaje seg�n la calificaci�n ingresada.


menos de 3 == "Failed!"
menos de 5 == "Insufficient!"
menor de 9 == "Good!"
10 == "Excellent!"

Mayor de 10 == "Grade outside range supported!"

*/

public class Ejercicio1 {

	public static void main (String[]args) {

				System.out.println("ingrese un numero");
		Scanner calificacion = new Scanner (System.in);		
				
		int n1 = 0;
		
		if (n1 <= 3) {
			System.out.println("Failed!");
		}else if ( n1 <= 5){
			System.out.println("Insufficient!");
				
			} else if (n1 <=9){
				System.out.println("Good!");
			}else if (n1 ==10){
				System.out.println("Excellent!");
			}else if(n1 >10){
				System.out.println("Grade outside range supported");
			}
	
			
	}

	
	
}
