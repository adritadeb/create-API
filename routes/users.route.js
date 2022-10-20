const express = require('express');
const router = express.Router();

router.get('/random', async(req, res) => {
    res.send('users here');
});

module.exports = router;