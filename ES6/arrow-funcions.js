let array = [1,2,3,4,5,6];
let array = array.map(function(value){
    return value*10;
});
// fazendo a mesma coisa so que usando o ES6 teremos

 //let array2 = array.map(value => value * 10);

 let array2 = array.map((value, index) => {

     return value * 10 // SEMPRE QUE TIVER CHAVES É NECESSARIO EXPLICITAR O RETURN NA FUNÇAO
});
//  outro exemplo
//// se o elemento for maior que 10, retorne 0, senão retorne 2;
array.map(value => value> 10 ? 0 : 2); 
let funcaoSoma = (parameto1, parametro2) => parameto1 + parametro2;

setTimeout(() => {
    execucao
    
}, timeout);
setInterval(() => {
    
}, interval);

