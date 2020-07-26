'use strict';
const input = require('readline-sync');


let userString =input.question("pleas ask me a question:");
let splitString = userString.split(" ");
let BackToString = splitString.join('*');



console.log(BackToString);