'use strict';
const input = require('readline-sync');
let num = input.questionInt("please enter positive number:");

function isPrime(num){
    for (let i = 2; i < num; i++) 
        if (num % i === 0 ) return false;
    return num > 1;

}

for (let i = 1; i <= num; i++)
	if ( isPrime(i) ){
	console.log(i)
	}



 
   



