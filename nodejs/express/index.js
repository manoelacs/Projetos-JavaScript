var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello from express SON')

});
app.get('/hello', function (req, res) {
    res.json({
        message: 'This is my router hello'
    })
});
app.get('/hello/:name', function (req, res) {
    res.json({
        message: 'This is my param ' + req.params.name
    })

});
app.listen(9000, function () {
    console.log('express has been started')
});