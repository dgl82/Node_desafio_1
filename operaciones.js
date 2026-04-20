const fs = require("fs");

const registrar = (nombre, edad, animal, color, enfermedad) => {};

const leer = () => {
  const citas = fs.readFileSync("citas.json", "utf8");
  JSON.parse(citas).forEach((cita) => {
    console.log(cita);
  });
};

module.exports = { registrar, leer };
