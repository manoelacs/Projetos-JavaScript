var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var arr = [];
  for (var i=0; i<10; i++){
    arr.push({
      id: i,
      name: 'Company' + 1
    });
  }
  res.render('index', {
    title: 'Express mongoose handlebars',
    name: 'Manoela',
    data: arr
  });
});

module.exports = router;

