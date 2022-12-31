const { leerInput, inquirerMenu, inquirerPausa } = require("./helpers/inquirer");
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
                await busquedas.ciudad( lugar );

                
                //Buscar los lugares

                //Seleccionar el lugar

                //Clima

                //Mostrar resusltados
                console.log('Informacion de la ciudad\n');
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Minima:', );
                console.log('Maximo:', );

                
            break;
            case 2:
                console.log({opt});
            break;
        }    

    if (opt !==0) await inquirerPausa();
} while(opt !== 0);


}

main();