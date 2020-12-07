const { response } = require('express');
const express = require('express');

const router = express.Router();

router.use(express.urlencoded({extended: true}));

router.use(express.text());

console.log(__dirname);


//Remote
router.get('/', (req, res) => {
    res.render('/app/src/views/index.html', { title: 'Bienvenido a Blaze!'});
});

router.get('/capitulos', (req, res) => {
    res.render('/app/src/views/capitulos.html', { title: 'Capítulos'});
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
        }

        const client = new Client(connection);

        client.connect();

        const queryString = 'SELECT txtcaps FROM blazecaps WHERE numcaps = $1';

        client.query(queryString, [cap])
        .then(response => res.send(response.rows))
        .then(e => console.log(e));
    } catch(e){
        console.log(e);
    }
});

router.get('/galeria', (req, res) => {
    res.render('/app/src/views/galeria.html', { title: 'Galería'});
});

router.get('/autor', (req, res) => {
    res.render('/app/src/views/autor.html', { title: 'Wyneg S. Rhuntar'});
});

//Local

/*router.get('/', (req, res) => {
    res.render('/home/wyneg/blazethemagician/src/views/index.html', { title: 'Bienvenido a Blaze!'});
});

router.get('/capitulos', (req, res) => {
    res.render('/home/wyneg/blazethemagician/src/views/capitulos.html', { title: 'Capítulos'});
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

        var queryString = 'SELECT txtcaps FROM caps WHERE numcaps = $1';

        client.query(queryString, [cap])
        .then(response => res.send(response.rows))
        .then(e => console.log(e));

    } catch(e){
        console.log(e);
    }
    
});

router.get('/galeria', (req, res) => {
    res.render('/home/wyneg/blazethemagician/src/views/galeria.html', { title: 'Galería'});
});

router.get('/autor', (req, res) => {
    res.render('/home/wyneg/blazethemagician/src/views/autor.html', { title: 'Wyneg S. Rhuntar'});
});*/


module.exports = router;
