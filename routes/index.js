const express = require('express');
const router = express.Router();

const kanban = require('../routes/kanban');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Connected Successfully to Server'
    });
});

router.use('/kanban', kanban);


module.exports = router;