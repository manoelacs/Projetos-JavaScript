let array = [1,2,3,4,5,6];
let obj ={
    first_name : 'luiz', 
    last_name : 'carlos'
};

for(let i in array){
    console.log(array[i]);
}
for(let i in obj){
    console.log(i, obj[i]);
}
//nova forma de fazer a mesma coisa de cima
for(let value of array){
    console.log(array[value]);
}
for(let [index, value] of array.entries()){
    console.log(index, value);
}
console.log(array.entries());

let keys = Object.keys(obj);
for(let key of keys){
    console.log(obj[key]);
}
