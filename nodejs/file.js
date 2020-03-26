var fs = require('fs');
//fs = file system;
/*Escrever em um arquivo usando node*/
/*fs
    .writeFile('data.txt', 'Hello world from SON', function (err) {
        if (err){
            throw  err;
        }

    })*/

/*Ler em um arquivo usando node*/
/*fs
    .readFile('data.txt', function (err, data) {
        if (err){
            throw err;
        }
        console.log(data.toString('utf8'));

    });*/
//listar todos os arquivos do diretorio
/*fs
        .readdir('.', function (err, files) {
            if (err){
                throw err;
            }
            for (var file in files){
                console.log(files[file]);
            }
})*/

/// fazendo o mesmo, mas de forma assincrona
fs
    .readdirSync('.')
    .filter(function (file) {
        return(file.endsWith('.js'))
    })
    .forEach(function (file) {
        console.log(file);

    })