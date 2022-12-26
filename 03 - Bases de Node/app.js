const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('yargs').option('b', {
    alias : 'base',
    type : 'number',
    demandOption : true
}).check((argv, options) => {
    if (isNaN (argv.b)){
        throw 'la base tiene que ser un numero'
    }
    return true;
}).argv;
const argv2 = require('yargs').option('l', {
    alias: 'limite',
    type: 'boolean',
    demandOption : false,
    default: true
}).argv;

console.clear();
//const base = 3;

//const [,,arg3 = 'base=5'] = process.argv;
//const [, base] = arg3.split('=');
console.log(process.argv);


crearArchivo(argv.b, argv2.l).then(nombreArchivo => console.log(nombreArchivo, "creado")).catch (err => console.log(err));