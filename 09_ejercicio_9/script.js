/* 9. Escribe un programa que responda a un usuario que quiere comprar un
helado en una conocida marca de comida rápida cuánto le costará en
función del topping que elija.
● El helado sin topping cuesta 50 MXN.
● El topping de oreo cuesta 10 MXN.
● El topping de KitKat cuesta 15 MXN.
● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa
le indicará “no tenemos este topping, lo sentimos.” y a continuación le
informará el precio del helado sin ningún topping. */

let helado = prompt("¡Bienvenido a la Heladeria de Crepes & Waffles! \n \nPor favor digite la opción de topping que desee: \n  \n1 > Oreo \n2 > KitKat \n3 > Brownie");

if (helado == 1) {
    alert ("El valor del helado es de 60 MXN \n¡Gracias por su compra!");
} else if ( helado == 2 ) {
    alert ("El valor del helado es de 65 MXN \n¡Gracias por su compra!");
} else if ( helado == 3 ) {
    alert ("El valor del helado es de 70 MXN \n¡Gracias por su compra!");
} else if ( helado != 1 || helado != 2 || helado != 3) {
    alert ("No tenemos este topping, lo sentimos. \n \nEl valor del helado es de 50 MXN");
} 
