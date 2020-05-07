//usando o modulo express
var express = require('express');
var path =  require('path');
//usando o modeulo http
var http =  require('http');
var app  =  express();
var routes = require('./routes');
var bodyParser = require('body-parser');
//app.set('views', './views_dir'); // o ./views_dir é o nome do diretório que será usando como views
app.set('view engine', 'pug');

app.use(function (require, response, next) {
    require.name = 'SON'
    console.log('I AM A CUSTOM MIDDLEWARE');
    next();

});

// MÓDULO EXPRESS, MAS SEM USAR ROUTES
app.get('/', function (req, res) {
    res.render('index', {
        message: 'Hello world usando index.pug no express'
    });
    //res.send('Hello world from express by '+ req.name)
});
app.get('/world', function (req, res) {
    res.send('world');
});
app.use('/public',express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// USANDO ROUTES
// endpoint hello, poderia haver vários endpoints no routes
app.use('/hello', routes);
//middleware para captura de erros
app.use(function (err, require, response, next) {
    require.status(500)
            .json({
                     message: 'Something wrong happens'
             });
});
//USANDO O MÓDULO HTTP AO INVÉS DE USAR O EXPRESS, COM A MESMA FUNCONALIDADE
//http.createServer(app).listen(3000, function () {
//    console.log('Express started');
//})

// TRECHO DE CÓDIGO FAZ A MESMA COISA QUE O TRECHO ACIMA, PORÉM USANDO O MÚDELO EXPRESS
app.listen(3000, function () {
    console.log('Express started');
})