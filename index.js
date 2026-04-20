const { registrar, leer } = require("./operaciones.js");

if (operacion === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
}
if (operacion === "leer") {
  leer();
}
