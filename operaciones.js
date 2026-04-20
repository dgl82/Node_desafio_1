const fs = require("fs");

const registrar = (nombre, edad, animal, color, enfermedad) => {
  /*Primero leemos el contenido del archivo citas.json y lo parseamos para convertirlo en formato JSON
      esto para agregar datos al archivo y no sobreescribir el contenido del archivo*/
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  //Luego le agregamos como objeto los argumentos recibidos en la función a través del push
  citas.push({ nombre, edad, animal, color, enfermedad });
  //Sobreescribimos el archivo citas.json con stringify para que el contenido tenga un string con formato JSON
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 1));
};

const leer = () => {
  //Leemos el archivo con parse para convertir el string con formato JSON a un arreglo con formato JSON
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  //Lo mostramos en consola
  console.log(citas);
};

module.exports = { registrar, leer };
