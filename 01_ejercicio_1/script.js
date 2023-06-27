/* 1. Solicitar al usuario que responda a la pregunta
 (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”,
 en caso de contestar no, responder: “No te creo”. */

let belleza = prompt("¿Eres bellisimo/a?");

if (belleza == "sí") {
    alert("Ciertamente");
} else { alert("No te creo"); }