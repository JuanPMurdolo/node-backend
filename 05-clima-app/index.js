require('dotenv').config();

const { leerInput, inquirerMenu, inquirerPausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    let opt;

    const busquedas = new Busquedas();

    do {
        opt = await inquirerMenu();
        switch(opt) {
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad :');
                const lugares = await busquedas.ciudad( lugar );
                const idSel = await listarLugares(lugares);
                if (idSel === '0' ) continue;

                const lugarSel = lugares.find(l => l.id === idSel);
                busquedas.agregarHistorial( lugarSel.nombre);
                //Clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng)
                console.log(clima)

                //Mostrar resusltados
                console.log('Informacion de la ciudad\n');
                console.log('Ciudad:', lugarSel.nombre);
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Minima:', clima.min);
                console.log('Maximo:', clima.max);
                console.log('Como esta el clima', clima.desc)

                
            break;
            case 2:
                busquedas.historial.forEach((lugar, i) =>{
                    const idx = `${i + 1}`.green
                    console.log(`${idx} ${lugar}`);
                } )
            break
            case 3:
                console.log({opt});
            break;
        }    

    if (opt !==0) await inquirerPausa();
} while(opt !== 0);


}

main();