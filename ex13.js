'use strict';
const input = require('readline-sync');

let LongestWordString = input.question("pleas enter a santance:");
let nosignsnonumbersString = LongestWordString.replace(/[^A-Za-z]+/g, ' ');
let splitLongestWordString = nosignsnonumbersString.split(" ");
let sortedstring = splitLongestWordString.sort((a, b) => b.length - a.length);


console.log(sortedstring[0]);