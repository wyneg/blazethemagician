const express = require('express');

const router = express.Router();

console.log(__dirname);

router.get('/', (req, res) => {
    res.render('/app/src/views/index.html', { title: 'Bienvenido a Blaze!'});
});

/*router.get('/capitulos', (req, res) => {
    res.render('/app/src/views/capitulos.html', { title: 'Capítulos'});
});*/

router.get('/galeria', (req, res) => {
    res.render('/app/src/views/galeria.html', { title: 'Galería'});
});

router.get('/autor', (req, res) => {
    res.render('/app/src/views/autor.html', { title: 'Wyneg S. Rhuntar'});
});

module.exports = router;
