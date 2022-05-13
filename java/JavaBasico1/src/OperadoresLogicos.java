import java.util.Objects;

public class OperadoresLogicos {

	public static void main(String[] args) {
		// comentario de  toda una linea
		/*
		 * comentario de muchas lineas
		 * 
		 */
//operadores de asignacion
	
		int num = 12; //agregar valores a las variable
		num = 45 ;

		
		System.out.println(num);
		
		//Operadores de comparación
		
		int num1, num2;
		num1 = 10;
		num2 = 20;
		
		System.out.println(num1);
		System.out.println("num"+ num1); //concatenacion string+numero
		System.out.println("num2"+ num2);
	    System.out.println(num1 == num2); //(operador de comparacion) en java no existe un triple =
		
	    //.equals () operador/metodo de comparacion
		
	    System.out.println(Objects.equals(num1,num2));
		
	    //<, >, <=,>=
	    int num3, num4;
	    num3 = 15;
	    num4 = 20;
	    
	    System.out.println(num3 < num4);
	    System.out.println(num3 > num4);
	    System.out.println(num3 <= num4);
	    System.out.println(num3 >= num4);
	    
	    if (num3 < num4) {
	    	//codigo a ejecutar
	    	System.out.println("Numero 3 es menor");
	    }else {
	    	System.out.println("numero 3 es mayor");
	    	
	    }
	    
	    // !=
	    
	    System.out.println(num3 != num4);
	    
	    boolean comparacion = num3 != num4;
	    System.out.println(comparacion);
	    
	    //Operadores logicos
	    // AND = && = ambos valores deben ser true para que regrese un true 
	    //Or = || = solamente se necesita que uno de los valores sea verdadero para que regrese true 
	    //NOT = ! = invierte el valor que tiene hacia la derecha
	    
	    System.out.println(true && true);
	    System.out.println(true || true);
	    System.out.println(!true && true); // solo cambia un valor 
	    System.out.println (!(true && true)); //cambia todo el cotenido
	    
	    
	}

}
