const express = require('express');
const router = express.Router();

const kanban = require('./kanban');

router.get('/health-check', (req, res) => {
    res.status(200).json({
        message: 'Connected Successfully to Server'
    });
});

router.use('/kanbans', kanban);


module.exports = router;