/* 11.Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
distancia recorrida por un vehículo con cargo extra por los litros
consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto”
ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo
total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al
total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros
consumidos. */

const precio = { 'coche': 0.20, 'moto': 0.10, 'autobús': 0.5 };
const vehiculo = prompt('¿Qué tipo de vehículo es? \n Coche \n Moto \n Autobús');
const distancia = parseFloat(prompt('¿Cuántos kilómetros recorrió?'));
const volumen = parseFloat(prompt('¿Cuántos litros consumió?'));

let total = precio[vehiculo] * distancia;

if (volumen > 0 && volumen <= 100) {
    total += 5;
} else if (volumen > 100) {
    total += 10;
}

alert(`El total a pagar es $${total.toFixed(2)}`);