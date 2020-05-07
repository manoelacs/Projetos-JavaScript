var Smartphone = require('../models/smartphones.model');

// endpoint
exports.test = (function (req, res) {
 res.send('Olá! Teste ao Controler');
});

// Adicionar smartphone à DB
exports.create = function (req, res) {
   let smartphone = new Smartphone(
       {
        nome: req.body.nome,
        marca: req.body.marca
       }
   );
   smartphone.save(function (err) {
                                    if (err){
                                            return next(err);
                                    }
                                    res.send('Registro de Smartphone criado com sucesso')
   })

}
exports.details = function (req, res) {
                                        Smartphone.findById(req.params.id, function (err, product) {
                                         if (err) return next(err);
                                         res.send(smartphone);

                                        })

};