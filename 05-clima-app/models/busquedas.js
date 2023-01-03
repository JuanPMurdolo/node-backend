const fs = require('fs')

const axios = require('axios')

class Busquedas {

    historial = ['La Plata', 'Berisso',  'Gualeguaychu', 'Ensenada'];
    dbPath = './db/database.json';

    constructor(){
        this.leerDB();
    }

    get historialCapitalizado(){
        return this.historial.map(lugar => {
            let palabras = lugar.split(' ');
            palabras = palabras.map(p => p[0].toUpperCase() + p.substring(1));
            return palabras.join(' ')
        });
    }

    async ciudad(lugar){
    try{   
        const instance = axios.default.create({
            baseURL: `https://api.mapbox.com/`,
            params: {
                'access_token': process.env.MAPBOX_KEY,
                'limit' : 5,
                'language': 'es'
            }
        })
        const resp = await instance.get(`geocoding/v5/mapbox.places/${lugar}.json`);
        //const resp = await axios.get('https://reqres.in/api/users?page=2');
        return resp.data.features.map( lugar => ({
            id: lugar.id,
            nombre: lugar.place_name,
            lng: lugar.center[0],
            lat: lugar.center[1]
        }));
    } catch(error){
        return [];
    }
}


async climaLugar(lat,lon){
try{
    const instance = axios.default.create({
        baseURL: 'https://api.openweathermap.org',
        params: {
            'lat': lat,
            'lon': lon,
            'appid': process.env.OPENWEATHER_KEY,
            'lang': 'es',
            'units': 'metric'
        }
    })
    const resp = await instance.get('/data/2.5/weather');
    console.log(resp)
    const {weather, main} = resp.data;
    return {
        temp: main.temp,
        max: main.temp_min,
        min: main.temp_max,
        desc: weather[0].description
    }
}
catch{
    return [];
}}

agregarHistorial (lugar = ''){
    if (this.historial.includes(lugar.toLocaleLowerCase())){
        return;
    }
    this.historial.unshift(lugar.toLocaleLowerCase());
    
    //grabar bbdd
}

guardarDB (){
    const payload = {
        historial: this.historial
    }
fs.writeFileSync(this.dbPath, JSON.stringify(payload))
}

leerDB(){
    if (!fs.existsSync(this.dbPath)){
        return
    }
 const file = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
 const data = JSON.parse(file);

 this.historial = data.historial;
}

}


module.exports = Busquedas