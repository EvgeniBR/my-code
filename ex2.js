'use strict';
const input = require('readline-sync');

let first = input.questionInt("Enter first number: ");
let second = input.questionInt("Enter second number: ");

let outcome = mytenfunction(first,second);
    
function mytenfunction(first,second){
    return(first + second);
}

if (outcome === 10) { 
    console.log("makes 10");
} else {
    console.log("nope");
} 