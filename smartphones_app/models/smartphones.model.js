const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    nome: {type: String, required: true, max: 100},
    marca: {type: Number, required: true},
});
//exportar modelo
module.exports = mongoose.model('Smartphone', Schema);