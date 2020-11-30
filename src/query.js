//Cliente base de datos
const amb = require('dotenv').config();

const { Client } = require('pg');
const router = require('./routes');

console.log('user : ' + process.env.DB_USER + 'pass : ' + process.env.DB_PASSWORD);

const connection = {
    user: amb.DB_USER,
    host: amb.DB_HOST,
    database: amb.DB_DATABASE,
    password: amb.DB_PASSWORD,
    port: amb.DB_PORT
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
