/* 10. Un conocido portal de educación en tecnología está ofreciendo
programas para aprender a desarrollar aplicaciones. Escribe un programa
que le indique a la persona interesada cuánto deberá pagar
mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su
costo mensual:
    ● Course: $4999 MXN
    ● Carrera $3999 MXN
    ● Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el
descuento correspondiente al precio final.
    ● Beca Facebook: 20% de descuento.
    ● Beca Google: 15% de descuento.
    ● Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario
cuánto gastaría en total por el curso elegido, tomando en cuenta las
siguientes duraciones:
    ● Course: 2 meses
    ● Carrera 6 meses
    ● Master: 12 meses
*/


let curso = 4999;
let carrera = 3999;
let master = 2999;
let google = 0.85;
let facebook = 0.80;
let jesua = 0.50;
let dcurso = 2;
let dcarrera = 6;
let dmaster = 12;

let programa = prompt("¡Bienvenido Tech Institute! \n \nPor favor digite el programa educativo que desee: \n  \nCurso \nCarrera \nMaster");
let beca = prompt("¿Tienes una beca? \n \nPor favor digite una de las siguientes opciones: \n  \nGoogle \nFacebook \nJesua \nNinguna");


if (programa == "curso" && beca == "google") {
    alert("El Curso dura " + [dcurso] + " meses y su costo mensual es de " + parseInt([curso * google]) + " MXN y el valor total del programa es de " + parseInt([curso * google * dcurso]) + " MXN.");
}
else if (programa == "curso" && beca == "facebook") {
    alert("El Curso dura " + [dcurso] + " meses y su costo mensual es de " + parseInt([curso * facebook]) + " MXN y el valor total del programa es de " + parseInt([curso * facebook * dcurso]) + " MXN.");
}
else if (programa == "curso" && beca == "jesua") {
    alert("El Curso dura " + [dcurso] + " meses y su costo mensual es de " + parseInt([curso * jesua]) + " MXN y el valor total del programa es de " + parseInt([curso * jesua * dcurso]) + " MXN.");
}
else if (programa == "curso" && beca == "ninguna") {
    alert("El Curso dura " + [dcurso] + " meses y su costo mensual es de " + parseInt([curso]) + " MXN y el valor total del programa es de " + parseInt([curso * dcurso]) + " MXN.");
}

if (programa == "carrera" && beca == "google") {
    alert("La Carrera dura " + [dcarrera] + " meses y su costo mensual es de " + parseInt([carrera * google]) + " MXN y el valor total del programa es de " + parseInt([carrera * google * dcarrera]) + " MXN.");
}
else if (programa == "curso" && beca == "facebook") {
    alert("La Carrera dura " + [dcarrera] + " meses y su costo mensual es de " + parseInt([carrera * facebook]) + " MXN y el valor total del programa es de " + parseInt([carrera * facebook * dcarrera]) + " MXN.");
}
else if (programa == "curso" && beca == "jesua") {
    alert("La Carrera dura " + [dcarrera] + " meses y su costo mensual es de " + parseInt([carrera * jesua]) + " MXN y el valor total del programa es de " + parseInt([carrera * jesua * dcarrera]) + " MXN.");
}
else if (programa == "curso" && beca == "ninguna") {
    alert("La Carrera dura " + [dcarrera] + " meses y su costo mensual es de " + parseInt([carrera]) + " MXN y el valor total del programa es de " + parseInt([carrera * dcarrera]) + " MXN.");
}

if (programa == "master" && beca == "google") {
    alert("El Master dura " + [dmaster] + " meses y su costo mensual es de " + parseInt([master * google]) + " MXN y el valor total del programa es de " + parseInt([master * google * dmaster]) + " MXN.");
}
else if (programa == "curso" && beca == "facebook") {
    alert("El Master dura " + [dmaster] + " meses y su costo mensual es de " + parseInt([master * facebook]) + " MXN y el valor total del programa es de " + parseInt([master * facebook * dmaster]) + " MXN.");
}
else if (programa == "curso" && beca == "jesua") {
    alert("El Master dura " + [dmaster] + " meses y su costo mensual es de " + parseInt([master * jesua]) + " MXN y el valor total del programa es de " + parseInt([master * jesua * dmaster]) + " MXN.");
}
else if (programa == "curso" && beca == "ninguna") {
    alert("El Master dura " + [dmaster] + " meses y su costo mensual es de " + parseInt([master]) + " MXN y el valor total del programa es de " + parseInt([master * dmaster]) + " MXN.");
}