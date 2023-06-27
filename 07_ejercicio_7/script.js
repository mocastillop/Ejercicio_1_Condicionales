/* 7. Requerir al usuario que ingrese un día de la semana e imprimir un
mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
diferente si es sábado o domingo. Si el día ingresado no es ninguno de
esos, imprimir otro mensaje. */

let dia = prompt("Por favor ingresar un día de la semana en minúsculas y sin tildes:").toLowerCase();

if (dia === "lunes") {
    alert("El Lunes es excelente día para comenzar las actividades de la semana.");
} else if (dia === "viernes") {
    alert("El Viernes es un excelente día para programar actividades después de una extensa jornada laboral.");
} else if (dia === "sabado" || dia === "domingo") {
    alert("¡Es fin de semana, para descansar y pasarla bien!");
} else {
    alert("¡Entre Martes y Jueves hay que trabajar un montón!");
}
