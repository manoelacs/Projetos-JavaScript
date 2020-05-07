var express = require('express');
var router = express.Router();
var service = require('./../services/users');

/* GET users listing. */
router.get('/login', service.login);
router.get('/register', service.register);
router.post('/create', service.create);
router.post('/signin', service.signin);

module.exports = router;
