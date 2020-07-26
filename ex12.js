'use strict';
const input = require('readline-sync');

let userString =input.question("pleas enter a santance:");

let aString = userString.replace(/a/gi,"A");
let eString = aString.replace(/e/gi,"E");
let iString = eString.replace(/i/gi,"I");
let oString = iString.replace(/o/gi,"O");
let uString = oString.replace(/u/gi,"U");
let yString = uString.replace(/y/gi,"Y");




console.log(yString);

