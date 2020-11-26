const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/', (req, res) => {
    res.sendFile('/home/wyneg/blazethemagician/src/views/index.html');
});

module.exports = router;