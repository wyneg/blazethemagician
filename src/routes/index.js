const { response } = require('express');
const express = require('express');

const router = express.Router();

router.use(express.urlencoded());

router.use(express.text());

console.log(__dirname);

router.get('/', (req, res) => {
    res.render('/app/src/views/index.html', { title: 'Bienvenido a Blaze!'});
});

router.get('/capitulos', (req, res) => {
    res.render('/app/src/views/capitulos.html', { title: 'Capítulos'});

    const button = document.getElementsByName('buttonCap');

    button.addEventListener('click', function(e){
        console.log(button.values);
    });

    /*try{

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

        const queryString = 'SELECT numcaps FROM blazecaps';

        client.query(queryString,)
        .then(response => console.log(response.rows))
        .then(e => console.log(e));
    } catch(e){
        console.log(e);
    }*/
});

router.post('/capitulos', function (req, res) {
    //res.render('/app/src/views/capitulos.html', { title: 'Capítulos'});

    console.log("BODY : " + req.body.buttonCap);

    const cap = req.body.buttonCap;

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

    const queryString = 'SELECT txtcaps FROM blazecaps WHERE numcaps = $1';

    var capitulo = "";

    client.query(queryString, [cap])
    .then(response => { capitulo = response.rows; })
    .catch(e => console.log(e)).then(() => client.end());

    //req.body.capis = response.rows;

    res.send(capitulo);
});

router.get('/galeria', (req, res) => {
    res.render('/app/src/views/galeria.html', { title: 'Galería'});
});

router.get('/autor', (req, res) => {
    res.render('/app/src/views/autor.html', { title: 'Wyneg S. Rhuntar'});
});

module.exports = router;
