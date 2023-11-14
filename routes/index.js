const express = require('express');
const router = express.Router();

const job = require('../routes/jobsRoute');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Connected Successfully to Server'
    });
});

router.use('/jobs', job);

module.exports = router;