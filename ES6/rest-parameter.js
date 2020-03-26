function f(param1, param2, ... otherParams) {
    console.log(otherParams)

}
/// os tres pontinhos (...) simbolizam os rest parameter

f(1,2,3, 4, 5,6);
let arra1 =[1,2,3,4];
let  array2 = [5,6,7,8, ... arra1];
let string = "luiz carlo";
let stringArrray = [...string];
console.log(array2);
console.log(stringArrray);