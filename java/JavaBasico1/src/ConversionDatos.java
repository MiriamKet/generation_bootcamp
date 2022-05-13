
public class ConversionDatos {
public static void main(String[]args) {
	byte numeroByte = 127;
	short numeroShort = numeroByte;
	int numeroInt = numeroShort;
	long numeroLong = 500000000;
	//lo pequeño solo cabe en lo grande//
	
	int otroInt = (int) numeroLong;
	short otroShort = (short) otroInt;
	//tipo Parse (int) para evitar que marque error y lo grande quepa en lo pequenio//
    byte otroByte = (byte) otroShort;

System.out.println(otroInt);
}
}

