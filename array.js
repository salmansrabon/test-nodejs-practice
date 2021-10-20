const prompt = require('prompt-sync')();

// var numbers=[9,5,3,4,10,6];
// let max=numbers[0];
// let min=numbers[0];
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>=max){
//         max=numbers[i];
//     }
//     else if(numbers[i]<=min){
//         min=numbers[i];
//     }
// }
// console.log("Max number is "+max);
// console.log("Min number is "+min);

// var numbers=[1,2,3,4,5];
// numbers.forEach(element => {
//     console.log(element);
// });

var fruits = ["litchi", "mango", "banana"]
// fruits.push("banana","jackfruit");
// console.log(fruits)
// console.log(fruits[2]);
// fruits.pop();
// console.log(fruits);
//fruits.shift();
// fruits.unshift("jackfruit");
// fruits.push("apple");

// fruits[1]="apple";
// fruits.splice(1,2)
// console.log(fruits)

// let evenNumbers=[0,2,4,6,8]
// let oddNumbers=[1,3,5,7,9]
// let numbers=evenNumbers.concat(oddNumbers);
// console.log(numbers.sort())

while (true) {
    let input = prompt('input a digit: ');

    if (input != -1) {
        if (input % 2 == 0) {
            console.log("This is an even number");
        }
        else {
            console.log("This is odd number");
        }
    }
    else {
        console.log("Exit");
        break;

    }
}
