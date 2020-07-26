'use strict';
const input = require('readline-sync');
let n = input.questionInt("please enter positive number:");
let Factorial = 1;

for (let i = 1; i <= n; i++) {
   Factorial *= i;
}

console.log(Factorial);
