const express = require('express');
const router = express.Router();
const kanbanController = require('../controllers/kanbanController');

router.get('/', kanbanController.findAllKanbans);
router.post('/:id', kanbanController.addKanban);
router.patch('/edit/:id', kanbanController.editStatusKanban);

module.exports = router;