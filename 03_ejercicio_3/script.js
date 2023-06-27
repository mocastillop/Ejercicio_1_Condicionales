/* 3. Crear un programa que determine si un número introducido en un Prompt
es par o no, la respuesta será mostrada en un Alert.*/

let numero = prompt(`Ingresa un número`)
let cociente = numero % 2

if (cociente == 0) {
    alert(`¡El número ${numero} es par!`)
}

else {
    alert(`¡El número ${numero} es impar!`)
}
