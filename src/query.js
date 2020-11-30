//Cliente base de datos

const { Client } = require('pg');
const router = require('./routes');

const connection = {
    user: 'mlvqcsgesnyenk',
    host: 'ec2-52-5-176-53.compute-1.amazonaws.com',
    database: 'd7e454ve0aihrh',
    password: '10cbe08fc0ed8cb937ffa0e7fc33bf2a7718bf34d1f09e873249509cc836a084',
    port: 5432
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
