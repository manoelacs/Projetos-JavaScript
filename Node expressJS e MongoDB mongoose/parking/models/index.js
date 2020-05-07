var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/parking',{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
var db = mongoose.connection;
    db.on('open', function () {
    console.log('MongoDB is connected');
});
db.on('error', function () {
    console.log('MongoDB error');
});

return db;