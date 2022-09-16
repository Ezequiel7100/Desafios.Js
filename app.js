

//SEGUNDO DESAFIO


let usuario = prompt("ingrese su Nombre");


alert("bienvenido/a " + usuario )

const preciosProductos  = {
    "1" : 700,
    "2" : 9000,
    "3" : 3000
}
const nombreProductos = {
    "1" : "cable soul v8",
    "2" : "Monitor Samsung",
    "3" : "Teclado Noga"
}


let productos = prompt(`Coloque el numero del producto que usted desee comprar:
1. cable Soul V8 $700
2. Monitor Samsung $10000
3. Teclado Noga $4000
4. (Para salir)`);

EleccionUsuarioInc ()

function  EleccionUsuarioInc(){

    while (productos != "1" && productos != "2" && productos !="3" && productos != "4"){
        alert("Por favor ingrese un numero correcto")
        productos = prompt(`Coloque el numero del producto que usted desee comprar:
        1. cable Soul V8 $700
        2. Monitor Samsung $10000
        3. Teclado Noga $4000
        4. (Para salir)`);
    }

}

comparacionEleccionUsua ()

function comparacionEleccionUsua (){
    if (productos == "1" || productos == "2" || productos == "3") {
        alert("producto seleccionado: " +  nombreProductos[productos] + " con un valor de $" + preciosProductos[productos] )
        alert ("Producto agregado correctamente, pasaremos a la forma de pago")

    } else if (productos == "4"){
        alert("Gracias por ingresar a nuestra pagina")
    }
}



let opciones;

    while (productos != "4") {
    
        opciones = Number(prompt(`Escriba con la cantidad de cuotas con la cual usted desea pagar: 
            1 cuota 
            3 coutas 
            6 cuotas 
            9 cuotas 
            12 coutas`))


        if (opciones != 1 && opciones != 3 && opciones != 6 && opciones != 9 && opciones != 12 ) {
        
            alert("no ingreso cuotas correctas")
            opciones = Number(prompt(`Escriba con la cantidad de cuotas con la cual usted desea pagar: 
            1 cuota 
            3 coutas 
            6 cuotas 
            9 cuotas 
            12 coutas`))
            
    

        } else if (opciones == 1 || opciones == 3 || opciones == 6 || opciones == 9 || opciones == 12){
            calcularCuotas(productos, opciones)
            alert("el pago se realizo con exito")
            alert("Gracias por su compra")
            break
        }
    }
    

function calcularCuotas(productos, cuotas){
    let resultado = preciosProductos[productos] / cuotas;
    
    switch (opciones){
        case 1:
            alert ("efectuara el pago de 1 cuota de " + resultado);
            break;
        case 3:
            alert ("efectuara el pago de 3 cuota de " + resultado);
            break;
        case 6:
            alert ("efectuara el pago de 6 cuota de: " + resultado)
            break;
        case 9:
            alert ("efectuara el pago de 9 cuota de " + resultado)
            break;
        case 12:
            alert ("efectuara el pago de 12 cuota de " + resultado)
            break;
        default :
            break;
        }
}