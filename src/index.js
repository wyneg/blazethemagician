require('dotenv').config();

const { response } = require('express');
const express = require('express');

const app = express();

const path = require('path');

app.set('views', path.join(__dirname, '/views'));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, '/public')));

app.listen(process.env.PORT || 5000, () => {
    console.log('Server en puerto : ', process.env.PORT);
});




app.get('/capitulos/:id', (req, res) => {

    const capnum = req.params.id;
    
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

    client.query(queryString)
    .then(response => {
        console.log(response.rows);
        client.end();
    })
    .catch(err => {
        client.end();
        console.log(err);
    });
        //return response.rows;
});



