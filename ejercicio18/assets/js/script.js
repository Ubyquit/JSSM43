/*
 * FOR IN RECORRE LAS POSICIONES O INDICE
 * FOR OF RECORRE EL VALOR DENTRO DE LA POSICIÓN
 */

let frutero = ["Peras", "Manzanas", "Uvas", "Platanos"];

document.write("<br>FOR IN<br>");
for (let frutas in frutero) {
  document.write(`Las frutas son ${frutero[frutas]} <br>`);
}

document.write("<br>FOR OF<br>");
for (let frutas of frutero) {
  document.write(`Las frutas son ${frutas} <br>`);
}
