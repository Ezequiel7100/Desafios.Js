

//SEGUNDO DESAFIO


let usuario = prompt("ingrese su usuario");


alert("bienvenido/a " + usuario )


let productos = prompt(`Coloque el numero del producto que usted desee comprar:
1. cable Soul V8 $700
2. Monitor Samsung $10000
3. Teclado Noga $4000`);

const preciosProductos  = {
    "1" : 700,
    "2" : 10000,
    "3" : 4000
}
const nombreProductos = {
    "1" : "cable soul v8",
    "2" : "Monitor Samsung",
    "3" : "Teclado Noga"
}

alert("producto seleccionado: " +  nombreProductos[productos] + " con un valor de $" + preciosProductos[productos] )
alert ("Producto agregado correctamente, pasaremos a la forma de pago")

let opciones = Number(prompt(`Escriba con la cantidad de cuotas con la cual usted desea pagar: 
1 cuota 
3 coutas 
6 cuotas 
9 cuotas 
12 coutas`))

calcularCuotas()
function calcularCuotas(){
    switch (opciones){
        case 1:
            let resultado = preciosProductos[productos] / 1;
            alert ("efectuara el pago de 1 cuota de " + resultado);
            break;
        case 3:
            let resultado2 = preciosProductos[productos] / 3;
            alert ("efectuara el pago de 3 cuota de " + resultado2);
            break;
        case 6:
            let resultado3 = preciosProductos[productos] / 6;
            alert ("efectuara el pago de 6 cuota de: " + resultado3)
            break;
        case 9:
            let resultado4 =  preciosProductos[productos] / 9;
            alert ("efectuara el pago de 9 cuota de " + resultado4)
            break;
        case 12:
            let resultado5 =  preciosProductos[productos] / 12;
            alert ("efectuara el pago de 12 cuota de " + resultado5)
            break;
        default :
            break;
        }
}
alert("el pago se realizo con exito")
alert("Gracias por su compra")
