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

/* app.listen(process.env.PORT || 5000, () => {
    console.log('Server en puerto : ', process.env.PORT);
}); */

//Local
app.listen(5000, () => {
    console.log('Server en puerto : ', 5000);
});