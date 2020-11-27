const express = require('express');

const router = express.Router();

console.log(__dirname);

router.get('/', (req, res) => {
    res.sendFile('/app/src/views/index.html');
});

module.exports = router;
