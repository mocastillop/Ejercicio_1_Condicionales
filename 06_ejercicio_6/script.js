/*6. Solicitar al usuario que ingrese tres números y mostrar cuál
de los tres es el número mayor. Considerar el caso en que 2 
números sean iguales.*/

let n1 = prompt(`Ingresa un número`)
let n2 = prompt(`Ingresa un segundo número`)
let n3 = prompt(`Ingresa un tercer número`)

if (n1 > n2 && n1 > n3) {
   alert(`${n1} es el número mayor`);
} else if (n2 > n1 && n2 > n3) {
   alert(`${n2} es el número mayor`);
} else if (n3 > n1 && n3 > n2) {
   alert(`${n3} es el número mayor`);
} else if (n1 == "" && n2 == "" && n3 == "") {
   alert(`No se han introducido números`);
} else if (n1 == n2 || n1 == n3) {
   alert(`Dos o más de los números intoducidos son iguales`);
}