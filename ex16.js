'use strict';
const input = require('readline-sync');

let quantity = input.questionInt('How many numbers you want in the array? ');
let  myArray = [];
for(let i = 0; i < quantity; i++){
   myArray[i] = input.questionInt("Enter  number " +(i+1) + " : ");
}


let maxIndex = myArray.indexOf(Math.max.apply(Math, myArray));   
let minIndex = myArray.indexOf(Math.min.apply(Math, myArray));


let IndexArray = [minIndex,maxIndex];
console.log(IndexArray);