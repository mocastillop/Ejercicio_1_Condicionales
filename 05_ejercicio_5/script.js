/*5. Solicitar al usuario que ingrese dos números y mostrar cuál de los
 dos es menor. No considerar el caso en que ambos números son iguales.*/

let numero1 = prompt(`Ingresa un número`)
let numero2 = prompt(`Ingresa un segundo número`)

if (numero1 > numero2) {
    alert(`${numero1} es mayor que ${numero2}`)
}

else {
    alert(`${numero2} es mayor que ${numero1}`)
}