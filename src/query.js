//Cliente base de datos
require('dotenv').config();

const { Client } = require('pg');
const router = require('./routes');

//console.log('user : ' + process.env.DB_USER + 'pass : ' + process.env.DB_PASSWORD);

/*const connection = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
}*/

const connection = {
    user: 'mlvqcsgesnyenk',
    host: 'ec2-52-5-176-53.compute-1.amazonaws.com',
    database: 'd7e454ve0aihrh',
    password: '10cbe08fc0ed8cb937ffa0e7fc33bf2a7718bf34d1f09e873249509cc836a084',
    port: 5432
}

const client = new Client(connection);

client.connect();

/*router.get('/capitulos/:id', (req, res, next) => {
    res.render('/app/src/views/galeria.html', {output : req.params.id});
    console.log(req.params.id);
});*/

/*+ String(val)*/
client.query('SELECT numcaps FROM blazecaps WHERE numcaps = 1')
.then(response => {
    console.log(response.rows);
    client.end();
})
.catch(err => {
    client.end();
    console.log(err);
});

if (typeof(Storage) !== 'undefined') {
    localStorage.setItem("Capitulo" + String(cal), String(val));
} else {
    console.log(typeof(Storage) + 'undefined');
}
