const express = require('express');
const bodyParser = require('body-parser');
//  Importa Routes
const smartphones = require('./routes/smartphones.routes'); // Importa rota

// inicializar app express
const  app =  express();
app.use('/smartphones', smartphones)

//Acesso à BD
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/smatphones', { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na ligação ao MongoDB'))

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', smartphones);


// Servidor
let porto = 8000;
app.listen(porto, ()=>{
    console.log('servidor em execução no porto ' + porto);
})