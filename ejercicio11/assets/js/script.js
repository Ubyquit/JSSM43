/*
* Arraglo Asociativos
!DICCIONARIOS
!JSON
* Clave-Valor o Key-Value
*/

let aa = {
  nombre: "Luis",
  apellidoP: "Villafaña",
  apellidoM: "Rejón",
  edad: 32,
};

let nombre = aa["nombre"];
let apellidoP = aa.apellidoP;

// Buenas practicas.
document.write(nombre);
document.write(apellidoP);

// Malas practicas - hardcode
document.write(aa.nombre);
document.write(aa["apellidoP"]);
