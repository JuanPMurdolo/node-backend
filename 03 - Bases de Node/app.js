const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');
console.clear();
crearArchivo(argv.b, argv.l, argv.m).then(nombreArchivo => console.log(nombreArchivo, "creado")).catch (err => console.log(err));