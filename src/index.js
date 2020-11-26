const express = require('express');

const app = express();

const path = require('path');

//app.set('port', 3000);

app.set('views', path.join(__dirname, '/views'));

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, '/public')));

app.listen(process.env.PORT || 5000, () => {
    console.log('Server en puerto : ', process.env.PORT);
})
