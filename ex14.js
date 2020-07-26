'use strict';
const input = require('readline-sync');

let randomArray = Array.from({length: 5}, () => Math.floor(Math.random() * 101));


for (let i = 0; i < randomArray.length; i++) {
    console.log(randomArray[i]);
 }
