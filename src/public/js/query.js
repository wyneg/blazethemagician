//Cliente base de datos
require('dotenv').config();

const { Client } = require('pg');

const router = require('app/src/routes');

const connection = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
}


function showCap(val){
    const client = new Client(connection);

    client.connect();
    
    client.query('SELECT numcaps FROM blazecaps WHERE numcaps = ' + String(val))
    .then(response => {
        console.log(response.rows);
        client.end();
    })
    .catch(err => {
        client.end();
        console.log(err);
    });
}

/*if (typeof(Storage) !== 'undefined') {
    localStorage.setItem("Capitulo" + String(cal), String(val));
} else {
    console.log(typeof(Storage) + 'undefined');
}*/
