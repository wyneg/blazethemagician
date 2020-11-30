//Cliente base de datos

const { Client } = require('pg');
const router = require('./routes');

const connection = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
}

const client = new Client(connection);

client.connect();

router.get('/capitulos/:id', (req, res, next) => {
    res.render('/app/src/views/galeria.html', {output : req.params.id});
    console.log(req.params.id);
});


client.query('SELECT txtcaps FROM blazecaps WHERE numcaps = ' + String(val))
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
