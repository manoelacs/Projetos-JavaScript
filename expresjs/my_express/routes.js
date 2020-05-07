var express = require('express');
var router =  express.Router();

router.use( function (require, response, next) {
    console.log('I AM A ROUTER CUSTOM MIDDLEWARE');
    next();
})

router.get('/', function (req, res, next) {
    next(new Error('custom error'));
});
// expressão regular o id é opicional, o r npao, ex /idr, /r, nao funciona com /id
// '/a?r' aqui pode aparecer o a antes do r ou nao ex: /ar, /r
// '/a+r' necessariamente presica ser ex: /ar
// '/a*r' pode aparecer qualquer coisa entre a e r ex: /akdfdjfjfjdkjfjdsjfr, /ar, /a122323r
router.get('/a?r', function (req, res) {
    res.send('id?r')
});

router.get('/params/:name', function (require, response) {

    response.json({
        params: require.params,
        host  : require.host,
        header: require.headers,
        port  : require.port
    })
});
router.post('/body', function (require, response) {
    response.json(require.body.name)
});
router.get('/res', function (require, response) {
    response.render('index', {

    })
   // response.status(202).json({
   //     name: manoela,
    //    lastname: santos
   // })
  //  response.status(201).send('test')
});
module.exports = router;