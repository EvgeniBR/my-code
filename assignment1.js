'use strict';
const input = require('readline-sync');
console.log(" ][W][][E][][L][][C][][O][][M][][E][][!][]");
console.log(" Hello! Welcome to the Quiz of Cats & Dogs");
console.log(" ][C][][O][][M][][M][][E][][N][][C][][E][]");

console.log(" Question Number 1:");
console.log(" What is your favorit activity?");
console.log(" _________________________________________");
let activity = input.keyInSelect(['Reading a book','Camping','Walk at the beach','Running in the forest']);

console.log(" Question Number 2:")
console.log(" Who is your favorite cartoon character?");
console.log(" _________________________________________");
let cartoon = input.keyInSelect(['Scoobi Doo','Silvester','Goofy','Tom(from tom&jerry)']);

console.log(" Question Number 3:")
console.log(" Who or what will you take with you to an abandoned island");
console.log(" _________________________________________");
let island = input.keyInSelect(['all my friends','books','fishing rod','my family']);

console.log(" Question Number 4:")
console.log(" what is your favorit dish?");
console.log(" _________________________________________");
let dish = input.keyInSelect(['hot dog','lasagna','steak','Tuna sandwich']);

console.log(" Question Number 5:")
console.log(" what is your favorit color?");
console.log(" _________________________________________");
let color = input.keyInSelect(['blue','yellow','brown','red']);

let counter = 0;

if (activity == 0){
    counter = (counter + 1);
}else if (activity == 1){
    counter = (counter + 5);
}else if (activity == 2){
    counter = (counter + 3);
}else if (activity == 3){
   counter = (counter + 7);
}  

if (cartoon == 0){
    counter = (counter + 7);
}else if (cartoon == 1){
    counter = (counter + 3);
}else if (cartoon == 2){
    counter = (counter + 5);
}else if (cartoon == 3){
   counter = (counter + 1);
}  

if (island == 0){
    counter = (counter + 7);
}else if (island == 1){
    counter = (counter + 3);
}else if (island == 2){
    counter = (counter + 1);
}else if (island == 3){
   counter = (counter + 5);
}

if (dish == 0){
    counter = (counter + 5);
}else if (dish == 1){
    counter = (counter + 1);
}else if (dish == 2){
    counter = (counter + 7);
}else if (dish == 3){
   counter = (counter + 3);
}

if (color == 0){
    counter = (counter + 3);
}else if (color == 1){
    counter = (counter + 7);
}else if (color == 2){
    counter = (counter + 5);
}else if (color == 3){
   counter = (counter + 1);
}



if (counter <= 10){
    console.log('You are a COMPLETE cat person !!!');
}
if ((10 < counter) && (counter < 20)){
    console.log('You love cats & dogs EQUALLY !!!');
}
if (counter => 20){
    console.log('You are a COMPLETE dog person !!!');
}

