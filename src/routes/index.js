const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

console.log(__dirname);

router.get('/', (req, res) => {
    res.render('/app/src/views/index.html', { title: 'Bienvenido a Blaze!'});
});

router.post('/capitulos/', (req, res) => {
    
    try{

        console.log("numero" +req.body.name);

        const { Client } = require('pg');

        const connection = {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
        }

        const client = new Client(connection);

        client.connect();

        const queryString = 'SELECT numcaps FROM blazecaps WHERE numcaps = ?';

        client.query(queryString,)
        .then(response => console.log(response.rows))
        .then(e => console.log(e));
    } catch(e){
        console.log(e);
    }

    res.render('/app/src/views/capitulos.html', { title: 'Capítulos'});
});

router.get('/galeria', (req, res) => {
    res.render('/app/src/views/galeria.html', { title: 'Galería'});
});

router.get('/autor', (req, res) => {
    res.render('/app/src/views/autor.html', { title: 'Wyneg S. Rhuntar'});
});

module.exports = router;
