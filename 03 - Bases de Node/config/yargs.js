const argv = require('yargs').option('b', {
    alias : 'base',
    type : 'number',
    demandOption : true,
    describe : "Es la base de la tabla a multiplicar"
}).option('l', {
    alias: 'limite',
    type: 'boolean',
    default: false,
    describe : "Muestra la tabla en consola"
}).option('m', {
    alias: 'multiplicador',
    type: 'number',
    describe : "por cuantos valores se multiplicara la base"
})
.check((argv, options) => {
    if (isNaN (argv.b)){
        throw 'la base tiene que ser un numero'
    }
    return true;
}).argv;

module.exports = argv;