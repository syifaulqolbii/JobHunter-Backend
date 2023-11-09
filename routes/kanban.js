const express = require('express');
const router = express.Router();

const kanban = require('../controllers/kanban');

router.get('/', kanban.findAll);

module.exports = router;