console.log('it works');
//function calculateBill(billAmount, taxRate){

  //console.log('Running Calculate Bill!!!');
  //const total = billAmount*(1 + taxRate);
  //return total;

//const myTotal = calculateBill();
///console.log(myTotal);
//console.log(`your total is ${myTotal}`)

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
days = [d.getDay()];
let day = `some day`
if (days == 0){
   day = `Sunday`;
}
if (days == 1){
   day = `Monday`;
}
if (days == 2){
   day = `Tuesday`;
}
if (days == 3){
   day = `Wednesday`;
}
if (days == 4){
   day = `Thursday`;
}
if (days == 5){
   day = `Friday`;
}
if (days == 6){
   day = `Saturday`;
}


var hh = new Date();
let hour = [hh.getHours()];

var mm = new Date();
let minut = [mm.getMinutes()];

var ss = new Date();
let second = [mm.getSeconds()];


console.log(`Today is : ${day}
Current time is : ${hour}:${minut}:${second}`)


const pixels = '30px';
console.log(parseInt(pixels));

let numOfchildren = 2;
let partnerName = `Victoria`;
let geoLocation = `Canada`;
let jobTitle = `WebDev`;


function tellFortune(){
  let fortune =`You will be a ${jobTitle} in ${geoLocation},
  and married to ${partnerName} with ${numOfchildren} kids `;
  return fortune;

}

const myFortune = tellFortune();
console.log(myFortune);

let radius = 15;
function area(){
   let circleArea = (Math.PI*(radius*radius));
   return circleArea;
}
const myArea = area().toFixed(2);
console.log(myArea);

