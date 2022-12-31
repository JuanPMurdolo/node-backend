const axios = require('axios')

class Busquedas {

    historial = ['La Plata', 'Berisso',  'Gualeguaychu', 'Ensenada'];

    constructor(){
        //TODO
    }

    async ciudad(lugar = ''){
    try{    
        //peticion http
        //console.log('ciudad', lugar);
        const resp = await axios.get('https://reqres.in/api/users?page=2');
        console.log(resp.data)
        return []; //retonar lugares }
    } catch(error){
        return [];
    }
}
}


module.exports = Busquedas