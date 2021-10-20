// let hello="\"Hello \\ world\""
// let me="I\\'m";
// console.log(me)

// let myString="This is a software system";
// console.log(myString.indexOf("software"))
// console.log(myString.substring(10,18))
// console.log(myString.substr(10,8))
// console.log(myString.replace("system","device"))

// let wordCount= myString.split(" ").length;
// console.log(wordCount);

// let balance="1000.75";
// // console.log(balance.split('.')[1])
// let arr=balance.split('.');
// console.log(arr);

let string="hello friends";
let array=string.split(" ");
array.forEach(element => {
    console.log(element.charAt(0).toUpperCase()+element.slice(1));
});
