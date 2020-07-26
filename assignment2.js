'use strict';
const input = require('readline-sync');

var figlet = require('figlet');
 
console.log(figlet.textSync('welcome to war!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));
let name = input.question("pleas enter your name:");
let cash = 50;
let i = 1;
let bet = 0;
console.log('Hello ' + name + ' You currently have 50 ILS');

while (true){
    
    let choice = 1;
    bet = input.questionInt("Place your bet for the next round: 1-"+cash+':  ');
    if (bet > cash){
        console.log('I said between 1 and ' +cash+ ' And you typed '+ bet + '!!! I don\'t play with liars!!! Bye' );
        break;
    }
    if (bet > cash){
        console.log('I said between 1 and ' +cash+ ' And you typed '+ bet + '!!! I don\'t play with liars!!! Bye' );
        break;
    }

     let myCard = Math.floor(Math.random() * 12) + 1;
     let pcCard = Math.floor(Math.random() * 12) + 1;

     if (myCard > pcCard){
         cash = (cash + bet) ; 
     }
     if (pcCard > myCard){
         cash = (cash - bet) ;
     }
     if (myCard == pcCard){
         i=1;
         console.log('It\'s a draw bet again');
     }

     console.log('your card is ' + myCard +' and my card is ' + pcCard );
     if (myCard > pcCard){
         console.log('You won ' + bet + ' and now you have ' + cash )
     }if (myCard < pcCard){
        console.log('You lost ' + bet + ' and now you have ' + cash )
     }

     if (cash == 0){
         console.log('You are broke.... Bye Bye');
     }else if (cash > 0){
         console.log('what would you like to do?');
         choice = input.keyInSelect(['leave with my money :)','play anoter round <3  ']);
     }

     if ((choice == 0) || (cash == 0 || (choice == -1))){
         ;
         break;
     }
     console.log(choice);

     if (choice == 1){
          ; 
     }
    }



     


