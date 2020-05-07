var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
const db = mongoose.connection;
db.on('open', function () {
    console.log('MongoDB is connected');
});
db.on('error', function () {
    console.log('Something went during mongoDB connection');

});

return db;