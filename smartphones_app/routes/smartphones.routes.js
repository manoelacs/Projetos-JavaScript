const express = require('express');
const router = express.Router();

// Colocar controller que ainda não foi criada

const smartphone_controller = require('../controllers/smartphone.controller');

// Test simples
//capturar endpoint no controller
router.get('/testar', smartphone_controller.test);
router.post('/create', smartphone_controller.create);
router.get('/:id', smartphone_controller.details);


module.exports = router;