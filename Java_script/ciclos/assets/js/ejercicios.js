
/*
*
* *
* * *
* * * *
* * * * *
*/


for(let i=1; i<=5; i++){ //1   //2
    for(let j=1; j<=i;j++){    //5    //5
        document.write('*')
    }
document.write('<br>');

}





//Ejercicio 1

//Escribe un loop que haga lo siguiente:

//Repetidamente imprime el valor de la variable xValue, disminuyendo por 0.5 su valor cada iteración.
//El ciclo se mantendrá mientras que el valor de xValue sea positivo.


let xValue = new Number(prompt("escribe un valor mayor a 0"));
for(let i = xValue; i>0; i-=0.5){
    document.write(i + "<br>");
}



//Ejercicio 2
//Imprime todos los números impares entre 1 y 100

const num2 = 2;
for (let i =0; i<=100; i++){
    if(i%num2 == 0){
      document.write(i+1 + "<br>");
    }
}



//Ejercicio 3
//Escribe un ciclo while que imprima de 1 a n dentro de corchetes cuadrados
//Por ejemplo: si n = 6 imprime [1] [2] [3] [4] [5] [6]

const numIn = new Number(prompt("ingrese un numero"));
let contador = 1;

while (contador <= numIn){
    document.write("[" + contador +"]");
    contador++;
}



//Ejercicio 4
//Escribe un ciclo que calcule la suma de los numeros positivos entre 1 y n
//ejemplo: n = 5 sum = 15     
//por que (1 + 2 + 3 + 4 +5 )

const sam = () => {
    let numIn = new Number(prompt("Ingrese un número"));
    const res = [];
    let total = 0;
    for (numIn ; numIn>0 ; numIn--) {
        res.push(numIn)
        total += numIn;
      }
      document.write(res.length + "<hr>")
      document.write(total + " = " + res.join(' + ') +"<hr>")
      // document.write(total + "<hr>")
  }
  
  sam()
  
  

    
