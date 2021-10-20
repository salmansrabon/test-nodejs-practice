const input=require('prompt-sync')();

// let number=11.23456;
// console.log(number);
// console.log(number.toString());
// console.log(typeof(parseFloat(number)))
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));
// console.log(Math.trunc(number));
// console.log(number.toFixed(3));
// console.log(number.toPrecision(3));

let min=parseInt(input("Input min range: "));
let max=parseInt(input("Input max range: "));

console.log(Math.floor(Math.random()*(max-min)+min));

let fruits=["mango","banana","litchi"]
console.log(fruits[1])