import java.util.Scanner;

public class ControlDeFlujo {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int edad = sc.nextInt();
		sc.close();
		
	if(edad >= 18) {
		System.out.println("Eres mayor de edad");
	}else {
		System.out.println("Eres menor de edad");
	
	}
		//operador ternaro/ operador elvis sirve para poner una condicionante en vez de un if
	
	String mensaje = (edad >=18) ? ("Eres mayor de edadx2") : ("Eres menor de edadx2");
	System.out.println(mensaje);
	
	
	//switch tambien como condicionante
	
	String dia = "viernes";
	
	System.out.println("En que dia estamos:");
	sc.nextLine();
	String dia1 = sc.nextLine();
	sc.close();
	
	switch(dia1.toLowerCase()) {
	case "lunes":
		System.out.println("cinco minutos mas");
		break;
	case "viernes":
		System.out.println("chelas");
		break;
	}
	
	
	}

}
