const express = require('express');

const app = express();

const path = require('path');

app.set('views', path.join(__dirname, '/views'));

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, '/public')));

app.listen(process.env.PORT || 5000, () => {
    console.log('Server en puerto : ', process.env.PORT);
});

//Cliente base de datos

const { Client } =require('pg');

const connection = {
    user: 'mlvqcsgesnyenk',
    host: 'ec2-52-5-176-53.compute-1.amazonaws.com',
    database: 'd7e454ve0aihrh',
    password: '10cbe08fc0ed8cb937ffa0e7fc33bf2a7718bf34d1f09e873249509cc836a084',
    port: 5432
}

const client = new Client(connection);

client.connect();

client.query('SELECT txtcaps FROM blazecaps WHERE numcaps = 1')
    .then(response => {
        console.log(response.rows);
        client.end();
    })
    .catch(err => {
        client.end();
        console.log(err);
    });
