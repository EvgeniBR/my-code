'use strict';
const input = require('readline-sync');

var figlet = require('figlet');
 
function findAllIndexes(str, charToFind){
    let indices = [];
    for(let i=0; i<str.length;i++) {
        if (str[i] === charToFind) indices.push(i);
    }

    return indices;
}
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
function replaceOneStringFromAnother(first, second, indexes){
    for (let index of indexes){
        second = setCharAt(second, index,first[index] );
    }

    return second;
}
console.log(figlet.textSync('HangMan!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));
let wordbankArray = ['activities', 'historical' , 'personality' , 'technological' , 'vegetables' , 'boundaries' , 'exponential'];
let i = 1 ; 
let lives = 10 ;
let randomWord = wordbankArray[Math.floor(Math.random()*wordbankArray.length)];
let splitWord = randomWord.split("");
let astriskWord = randomWord.replace(/./gi, "*");

console.log('Hello, try to guess the word.');
console.log('you have 10 ♥');
console.log('guees right, get free turn. Guess wrong and it will cost 1 ♥');
console.log('your word is:')
console.log(astriskWord);
let guess = input.question('what letter would be your guess? ');
let guessIndexes = []

while (true) {
    guess = guess.toLocaleLowerCase();
    if (!(guess >= 'a' && guess<= 'z')){
        console.log('Guess again!');
        lives += 1;
    }

    if (randomWord.indexOf(guess) >= 0){
        guessIndexes = findAllIndexes(randomWord, guess);
        astriskWord = replaceOneStringFromAnother(randomWord, astriskWord, guessIndexes);
        console.log('you have ' +lives+ ' ♥');
        console.log('the word is '+ astriskWord);
    }else{
        lives = (lives -1);
        console.log('you have ' +lives+ ' ♥');
        console.log('the word is '+ astriskWord); 
    }
    if (lives == 0) {
        console.log('GAME OVER!!');
        break;
    }
    if (randomWord === astriskWord){
        console.log('GOOD WORK!!');
        break;
    }

    guess = input.question('what letter would be your guess? ');
            
        
        
}    
  
    

                                          
   

                                          








