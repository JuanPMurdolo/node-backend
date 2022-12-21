const fs = require('fs');

console.clear()

const base = 3;
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
console.log(salida)

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log("archivo creado")
})