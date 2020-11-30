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

function showCaps(numcaps){
    client.query('SELECT numcaps FROM blazecaps WHERE numcaps = ' + String(numcaps))
    .then(response => {
        console.log(response.rows);
        client.end();
    })
    .catch(err => {
        client.end();
        console.log(err);
    });
}
