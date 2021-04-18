const { response } = require('express');
const express = require('express');

require('dotenv').config();

const router = express.Router();

const fs = require('fs');

var pIndex = 1;

var pCapitulos = 1;

var pGaleria = 1;

var pAutor = 1;

function visitors (pagina) {
    var counter;

    switch(pagina){
        case 'index':
            counter = pIndex++;
            break;
        case 'capitulos':
            counter = pCapitulos++;
            break;
        case 'galeria':
            counter = pGaleria++;
            break;
        case 'autor':
            counter = pAutor++;
            break;
        default:
            break;
    }

    var registro = 'Visitantes ' + pagina + ' : '  + counter+ '\n';
    console.log(registro);
    fs.appendFile(__dirname + '/visitantes.txt', registro, (err) => {
        if (err) throw err;
        console.log('Número de visitante salvado!');
    });
}

router.use(express.urlencoded({extended: true}));

router.use(express.text());

//Remote
router.get('/', (req, res) => {
    res.render('/app/src/views/index.html', { title: 'Bienvenido a Blaze!'});
    visitors('index');
});

router.get('/querycap', (req, res) => {

    try{

        const { Client } = require('pg');

        const connection = {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            ssl: true,
                extra: {
                    ssl: {
                    rejectUnauthorized: false,
                    },
                }
        }

        const client = new Client(connection);

        client.connect();

        var queryString = 'SELECT numcaps FROM blazecaps ORDER BY numcaps DESC LIMIT 1';

        client.query(queryString)
        .then(response => res.send(response.rows))
        .then(() => 'Last Chapter')
        .catch(e => console.error(e));
        
    } catch(e){
        console.log(e);
    }
});

router.get('/capitulos', (req, res) => {
    res.render('/app/src/views/capitulos.html', { title: 'Capítulos'});
    visitors('capitulos');
});

router.get('/capitulos/:id', (req, res) => {

    var cap = req.params.id;

    try{

        const { Client } = require('pg');

        const connection = {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            ssl: true,
                extra: {
                    ssl: {
                    rejectUnauthorized: false,
                    },
                }
        }

        const client = new Client(connection);

        client.connect();

        const queryString = 'SELECT txtcaps FROM blazecaps WHERE numcaps = $1';

        client.query(queryString, [cap])
        .then(response => res.send(response.rows))
        .then(() => 'Chapter Retrieved')
        .catch(e => console.error(e));

    } catch(e){
        console.log(e);
    }
});

router.get('/galeria', (req, res) => {
    res.render('/app/src/views/galeria.html', { title: 'Galería'});
    visitors('galeria');
});

router.get('/autor', (req, res) => {
    res.render('/app/src/views/autor.html', { title: 'Wyneg S. Rhuntar'});
    visitors('autor');
});

/* //Local

router.get('/', (req, res) => {
    res.render('/mnt/pavo/blazethemagician/src/views/index.html', { title: 'Bienvenido a Blaze!'});
    visitors('index');
});

router.get('/querycap', (req, res) => {

    try{

        const { Client } = require('pg');

        const connection = {
            user: 'mlvqcsgesnyenk',
            host: 'ec2-52-5-176-53.compute-1.amazonaws.com',
            database: 'd7e454ve0aihrh',
            password: '10cbe08fc0ed8cb937ffa0e7fc33bf2a7718bf34d1f09e873249509cc836a084',
            port: 5432,
        }

        const client = new Client(connection);

        client.connect();

        var queryString = 'SELECT numcaps FROM blazecaps ORDER BY numcaps DESC LIMIT 1';

        client.query(queryString)
        .then(response => res.send(response.rows))
        .catch(e => console.log(e));

    } catch(e){
        console.log(e);
    }
});

router.get('/capitulos', (req, res) => {
    res.render('/mnt/pavo/blazethemagician/src/views/capitulos.html', { title: 'Capítulos'});
    visitors('capitulos');
});

router.get('/capitulos/:id', (req, res) => {

    var cap = req.params.id;

    try{

        const { Client } = require('pg');

        const connection = {
            user: 'postgres',
            host: 'localhost',
            database: 'blazecaps',
            password: '1983yattaze',
            port: 5432,
        }

        const client = new Client(connection);

        client.connect();

        var queryString = 'SELECT txtcaps FROM blazecaps WHERE numcaps = $1';

        client.query(queryString, [cap])
        .then(response => res.send(response.rows))
        .then(e => console.log(e));

    } catch(e){
        console.log(e);
    }
    
});

router.get('/galeria', (req, res) => {
    res.render('/mnt/pavo/blazethemagician/src/views/galeria.html', { title: 'Galería'});
    visitors('galeria');
});

router.get('/autor', (req, res) => {
    res.render('/mnt/pavo/blazethemagician/src/views/autor.html', { title: 'Wyneg S. Rhuntar'});
    visitors('autor');
}); */


module.exports = router;
