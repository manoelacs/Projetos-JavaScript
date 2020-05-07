var express = require('express');
var router = express.Router();
var service = require('../services/car');
router.get('/edit/:id', service.edit);
router.get('/', service.find);
router.post('/', service.create);
router.put('/:id', service.update);
router.delete('/:id', service.remove);

router.get('/new', service.new);


module.exports = router;