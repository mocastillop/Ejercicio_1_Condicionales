/* 2. Solicitar al usuario un número, y determinar si es divisible entre 
dos o no. Mostrando al usuario un mensaje de “x número es divisible entre
2” o “x núm */

let numero = prompt(`Ingresa un número`)
let cociente = numero % 2

if (cociente == 0) {
    alert(`El número ${numero} es divisible entre 2`)
}

else {
    alert(`El número ${numero} no es divisible entre 2`)
}
