const { registrar, leer } = require("./operaciones.js");

/*Capturamos los argumentos de la terminal en el orden ingresado con process.argv,
se usa slice(2) porque los 2 primeros argumentos son "node" y el nombre del archivo.*/
const [operacion, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

//Si el argumento capturado en "operacion" es "registrar" o "leer" ejecuta una u otra función
if (operacion === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
}
if (operacion === "leer") {
  leer();
}
