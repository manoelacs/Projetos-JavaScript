var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');

router.get('/', function(req, res) {
    Person.find({}, function (err, people) {
        if(err) {
            return;
        }

        res.send(people);
    });
});
/*router.get('/:id', function (req, res) {
 Person.findOne({
      _id: req.params.id
   }, function (err, person) {
        if(err) {
           return;
        }
       res.send(person);
   });
 });*/
router.get('/:id', function (req, res) {
    Person.findById(req.params.id, function (err, person) {
        if (err) {
            return
        }
        res.send(person);
    });
});
/// POST
router.post('/', function(req, res) {
    var arr = [{
        name:{
            firstname: 'ana1',
            lastname: 'Maria'
        },
        age: 30
    }, {
        name:{
            firstname:'ana2',
            lastname:'maria'
        },
        age: 35
    }, {
        name:{
            firstname:'ana3',
            lastname:'maria'
        },
        age: 37
    }];
    Person.insertMany(arr, function (err, person) {
        if (err){
            return;
        }
        res.send(person);

    })
   /* var person = new Person({
        name:{
            firstname: 'Miguel',
            lastname: 'Santos'
        },
        age: 25
    });
    person.save(person, function(err, person) {
        if (err){
            return;
        }
        res.send(person);

    });*/
    /*Person.create({
        name: {
            firstname: 'Manoela',
            lastname: 'Santos'
        },
        age: 26
    }, function (err, person) {
        if (err){
            return;
        }
        res.send(person);
    });*/

});
router.put('/:id', function (req, res) {
    Person.findOneAndUpdate({
        _id: req.params.id
    },{
        name:{
            firstname: "Creuza",
            lastname: 'Santos'
        }
    },function (err, person) {
        if (err){
            return;
        }
        res.send(person);

    })
   /* Person.update({
        _id: req.params.id
    }, {
        name: {
            firstname: 'Ana',
            lastname: 'Sandra'
        }
    }, function (err, person) {
        if(err){
            return;
         }
        res.send(person);
    });*/
});
router.delete('/:id', function (req, res) {
    Person.findByIdAndRemove({
        _id: req.params.id
        }, function (err) {
        if (err){
            return;
        }
        res.send(req.params.id);

    });
   /* Person.remove({
        _id: req.params.id
    }, function (err) {
        if (err){
            return;
        }
        res.send(req.params.id);
    });*/

});

module.exports = router;
