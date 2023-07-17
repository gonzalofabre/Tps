 const readlineSync = require("readline-sync");

// Ejercicio 1

console.log("--------EJERCICIO 1 -------- \n\n");

let word = readlineSync.question("Enter a Word:");
for(i=1; i<=10; i++) {
console.log(i+'-  '+ word);
}

// Ejercicio 2

console.log("--------EJERCICIO 2 ------- \n\n");

let age = Number(readlineSync.question("How old are you? \n"))

for(i = 1; i<=age; i++) {
    console.log(i)
}

//Ejercicio 3

console.log("--------EJERCICIO 3 ------- \n\n");

let number = Number(readlineSync.question("Enter a Positive Integer: \n"));


let addNumbers =1;
let numberList = []
function pushNumbers () {
    numberList.push(addNumbers);
    addNumbers+=2;
}


if(number>0) {
    console.log(`List of odd numbers from 0 to the number you have chosen: \n`);
    while(addNumbers<number) {
        pushNumbers()
    };
    console.log(numberList);
} else {
    console.log(`The number you have chosen isn't a Positive Integer \n`);
};

//Ejercicio 4

console.log("--------EJERCICIO 4 ------- \n\n");

let height = readlineSync.question("Choose a number to set the height of the Right triangle: \n");
let asterisk= '*';

for(i=1; i <= height; i++) {
    console.log(asterisk);
    asterisk=asterisk+'*';
};

//Ejercicio 5

console.log("--------EJERCICIO 5 ------- \n\n");

let word2 = readlineSync.question("Enter a word:");

let wordSize = word2.length

for(i=wordSize-1; i>=0;i--) {
    console.log(word2[i]);
};







 

