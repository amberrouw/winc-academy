/*
const biggerThan = function(checkNumber){
    const check = checkNumber > 100;
    return check;
}

console.log(biggerThan(10));
*/
// this function does something

//Brenda the Bouncer Bot

const BrendaBot = function(maximumNumber, currentNumber, age){

    if (maximumNumber = 800 && currentNumber <= 800 && age >= 18) {
        sentence = "come in";
    } else if (maximumNumber = 800 && currentNumber > 800 && age >= 18) {
        sentence = "It's too busy now, come back later";
    } else {
        sentence = "This club is for adults";
    }
    return sentence;
}

console.log(BrendaBot("maxNum", 890, 10));

//this function produce something

const calculateAverage = function (numbers){
    average = numbers.reduce((total, n) => total + n) / numbers.length;
    return average;
}

const grades = [5, 7, 9, 8, 7];

console.log(Math.round(calculateAverage(grades)));
