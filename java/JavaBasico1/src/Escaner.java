import java.util.Scanner;

public class Escaner {
public static void main(String[]args) {
	Scanner escaner = new Scanner(System.in); // va a leer el teclado
	System.out.println("Escribe un numero");
	int numero = escaner.nextInt();
	System.out.println(numero); //muestra en la consola el valor que se ingresa
if (numero < 10) {
	System.out.println("el numero es menor a 10");
	
}


}
}
