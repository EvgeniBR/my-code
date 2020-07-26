'use strict';
const input = require('readline-sync');

let arraylength = input.questionInt('How many number would you like to create? ')

let randomArray = Array.from({length: arraylength}, () => Math.floor(Math.random() * 50)+1);


randomArray.sort(function(a, b) {
    return a - b;
}); 


console.log('min is ' + randomArray[0]);
console.log('max is ' + randomArray[arraylength -1]);

let sortarray = myArray.sort(function(a, b) {
    return a - b;
}); 

console.log('smallest number is ' + sortarray[0]);
console.log('biggest number is ' + (sortarray[sortarray.length - 1]));

let a = sortarray[0];
let b =  (sortarray[sortarray.length - 1]);

console.log(myArray.indexOf(a) , myArray.indexOf(b));