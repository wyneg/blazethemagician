const { response } = require('express');
const express = require('express');

const router = express.Router();

router.use(express.urlencoded({extended: true}));

router.use(express.text());

console.log(__dirname);

router.get('/', (req, res) => {
    res.render('/app/src/views/index.html', { title: 'Bienvenido a Blaze!'});
});

router.get('/capitulos', (req, res) => {
    res.render('/app/src/views/capitulos.html', { title: 'Capítulos'});

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

router.post('/capitulos', (req, res) => {
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

    var capitulo;
    client.query(queryString, [cap])
    .then(response => response.rows)
    .catch(e => console.log(e));

    //req.body.capis = response.rows;

    console.log('capitulo : ' + capitulo);

    res.write('<head>');
    res.write('<link rel="stylesheet" type="text/css" href="css/caps.css?v=2.0"/>');
    res.write('</head>');
    res.write('<div class="modal fade bd-example-modal-lg" id="mod1" tabindex="-1" role="dialog" aria-hidden="true">');
    res.write('<div class="modal-dialog modal-lg" role="document" id="cap1">');
    res.write('<div class="modal-content" id="contenido">');
    res.write('<div class="modal-header" id="caeza">');
    res.write('<button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>');
    res.write('</div>');
    res.write('<div class="modal-body" id="capis">');
    res.write('</div>');
    res.write('<div class="modal-footer" id="pata">');
    res.write('</div>');
    res.write('</div>');
    res.write('</div>');
    res.write('</div>');
    res.write('</div>');
    res.end();
});

router.get('/galeria', (req, res) => {
    res.render('/app/src/views/galeria.html', { title: 'Galería'});
});

router.get('/autor', (req, res) => {
    res.render('/app/src/views/autor.html', { title: 'Wyneg S. Rhuntar'});
});

module.exports = router;
