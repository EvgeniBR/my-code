'use strict';
const input = require('readline-sync');

let maybePalindrom = input.question("pleas enter a word or a number: ");
let reversedInput = "";

for (let i = 0; i < maybePalindrom.length; i++) {
    reversedInput = maybePalindrom[i] + reversedInput;
}
if (maybePalindrom == reversedInput ) {
    console.log('Great, it\'s a palindrom');
}else{
    console.log('sorry, not a palindrom');
}
