'use strict';
const input = require('readline-sync');

let people = input.questionInt('how many people are going to the resturant? ');
let kosher = input.question('shoud it be kosher? yes or no   : ');
let i = 0;
let mehadrin = ('empty string');
if (kosher == ('yes')){
    i = i +1;
}
if (kosher == ('no')){
    i = i+2;
}   
if (i==1){
    mehadrin = input.question('shoud it be kosher lemehadrin? yes or no   : ');
}
if (i==2){
    mehadrin = ('no');
}

if ((kosher !== ("yes")) && (kosher !== ("no"))){
    console.log('stop execution');
}

if ((mehadrin !== ("yes")) && (mehadrin !== ("no"))){
   console.log('stop execution');
}





console.log("what do you want to eat?");
let food = input.keyInSelect(['Sushi','Steak',]);
if ((kosher == ('yes')) && (mehadrin == ('yes')) && (food == 0)){
    console.log('I would recommend you to eat at Sashimi or Joya returants')
}else if ((kosher == ('yes')) && (mehadrin == ('no')) && (food == 0)){
    console.log('I would recommend you to eat at Onami or Oshi returants')
}else if ((kosher == ('no')) && (food == 0)){
    console.log('I would recommend you to eat at Foo or Nishi returants')
}else if ((kosher == ('yes')) && (mehadrin == ('yes')) && (food == 1)){
    console.log('I would recommend you to eat at Samarkand or LoAntrikot returants')
}else if ((kosher == ('yes')) && (mehadrin == ('no')) && (food == 1)){
    console.log('I would recommend you to eat at Deca or Regina returants')
}else if ((kosher == ('no'))  && (food == 1)){
    console.log('I would recommend you to eat at NG or Dixie returants')
}

