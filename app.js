//let nombrePrueba = prompt("ingrese su Nombre: ");
//let apellido = prompt("Ingrese su apellido")
//alert("hola " +  nombre + " " + apellido);
 

//let numero1 = prompt("ingreso primer numero");
//let numero2 = prompt("ingreso segundo numero");
 
//let resultado = parseInt(numero1) + parseInt(numero2);
//alert(numero1 + " + " + numero2 + " = " + resultado);




//PRIMER DESAFIO

let i = 1;
let numero = Number(prompt("ingrese un numero menor a 10"))
 
while(i< 10){
    if(numero >= 10){
       break;
    }
    console.log(i)
    i++;
    let resultado = numero + i;
    alert(`${numero} + ${i} = ${resultado}`)
    
}
alert("fin de la suma o tu numero es mayor o igual a 10")
    
    
    






/*
let entrada = prompt("Ingrese un texto o ESC para interrumpir");
let texto = " ";
while (entrada != "ESC" && entrada != "esc") {
  texto += entrada + " ";
  entrada = prompt("Ingrese un texto o ESC para interrumpir");
}
alert(texto);
*/