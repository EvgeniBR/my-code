'use strict';
const input = require('readline-sync');
let i = input.questionInt("please choose a number larger than 10:");
i=Number(i);
while (i <= 10) {
   i = input.questionInt("please choose a number LARGER than 10:");
   i = Number(i);
}

console.log("thank you!")
