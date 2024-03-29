const express = require('express');
const { dbConnection } = require('../database/config');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT

        //Endpoints
        this.usuariosPath = '/api/users';

        //Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user.routes'));
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Escuchando puerto: ', this.port);
        });
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        
        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio público
        this.app.use(express.static('public'));
    }
}

module.exports = Server;