const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, limite, multi = 11) => {
console.log("============================".green)
console.log(`        Tabla del ${base}   `.blue)
console.log("============================".green)    

let salida = '';
let consola = '';

for (let index = 1; index <= multi; index++) {
    salida += `${base} x ${index} = ${base * index}\n`;
    consola += `${base} x ${index} = ${base * index}\n`.red;
}
if (limite === true){
console.log(consola);
}

fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
return `tabla-${base}.txt`.rainbow
}

module.exports = {
    crearArchivo
}