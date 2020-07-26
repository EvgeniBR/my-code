'use strict';
const input = require('readline-sync');


let quantity = input.questionInt('How many numbers you want in the array? ');
let  myarray = [];
for(var i = 0; i < quantity; i++){
   myarray[i] = input.questionInt("Enter a number " +(i+1) + " : ");
}
console.log(myarray);
console.log(myarray.reverse());

let i = 1 ; 
while (i=1){
    let turn = 10;
    let randomWord = wordbankArray[Math.floor(Math.random()*wordbankArray.length)];
    i=0;
}

var figlet = require('figlet');
 
figlet('HANG MAN', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});