package ciclos;

import javax.swing.JOptionPane;

public class ciclodowhile {

	public static void main(String[] args) {
	
		String clave = "mango";
		String comparacion = "";
		
		do {
			
			comparacion = JOptionPane.showInputDialog("Intrduce la contrase�a"); //para mostrar un enunciado como el input

			if(clave.equals(comparacion)== false) {
			System.out.println("la contrase�a es incorrecta");
			
			}
			
		}while(clave.equals(comparacion) == false);
		
		System.out.println("la contrase�a es correcta");

	}

}
