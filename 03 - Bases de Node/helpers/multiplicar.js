const fs = require('fs');

const crearArchivo = async(base = 5) => {
console.log("============================")
console.log(`        Tabla del ${base}   `)
console.log("============================")    

let salida = '';

for (let index = 0; index < 11; index++) {
    if (index < 10){
    salida += `${base} x ${index} = ${base * index}\n`;
    } else {
        salida += `${base} x ${index} = ${base * index}`;
    }
}
console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida);
return `tabla-${base}.txt`
}

module.exports = {
    crearArchivo
}