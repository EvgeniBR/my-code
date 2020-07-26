'use strict';
const input = require('readline-sync');

let quantityArOne = input.question('How many words you want in the first array? ');
let  arrayOne = [];
for(var i = 0; i < quantityArOne; i++){
    arrayOne[i] = input.question("Enter a word: ");
}

let quantityArTwo = input.question('How many words you want in the second array? ');
let  arrayTwo = [];
for(var i = 0; i < quantityArTwo; i++){
    arrayTwo[i] = input.question("Enter a word: ");
}

let joinedArray = arrayOne.concat(arrayTwo);
console.log(joinedArray);
