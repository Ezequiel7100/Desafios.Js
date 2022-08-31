


//PRIMER DESAFIO
/*
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
  */
    
    




//SEGUNDO DESAFIO


let pagar = 6000;
let usuario = prompt("ingrese su usuario");


alert("bienvenido/a " + usuario + " su monto a pagar es de " + "$" + pagar)
elejir();


function elejir()  {

for ( opciones = 0 ; opciones == 1,3,6,9,12; opciones++ ) {
    let opciones = Number(prompt("Escriba con la cantidad de cuotas con la cula usted desea pagar: \n 1 cuota \n 3 coutas \n 6 cuotas \n 9 cuotas \n 12 coutas"))


if (opciones == 1) {
    let resultado = pagar;
    alert ("efectuara el pago de 1 cuota de " + resultado)
    break;
} else if (opciones == 3){
    let resultado2 = pagar / 3;
    alert ("efectuara el pago de 3 cuota de " + resultado2)
    break;
} else if(opciones == 6){
    let resultado3 = pagar / 6;
    alert ("efectuara el pago de 6 cuota de: " + resultado3)
    break;
} else if(opciones == 9){
    let resultado4 = pagar / 9 ;
    alert ("efectuara el pago de 9 cuota de " + resultado4)
    break;
} else if(opciones == 12){
    let resultado5 = pagar / 12;
    alert ("efectuara el pago de 12 cuota de " + resultado5)
    break;
}
else {
    alert("El numero de cuotas ingresado es incorrecto")
}
}
}
alert("el pago se realizo con exito")
