/*
The function we're going to create will do the following.

take two numbers
each number will be squared (multiplied with itself)
the squared numbers will be added together
this sum will be squared again
the resulting value is returned
*/

//function declarations

function sum1(number1, number2) {
    const num1 = number1 * number1;
    const num2 = number2 * number2;
    const num3 = num1 + num2;
    return num3 * num3;
}

console.log(sum1(1, 2));

//function expressions

const sum2 = function (number1, number2) {
    const num1 = number1 * number1;
    const num2 = number2 * number2;
    const num3 = num1 + num2;
    return num3 * num3;
};

console.log(sum2(1, 2));

//arrow functions

const sum3 = (number1, number2) => {
    const num1 = number1 * number1;
    const num2 = number2 * number2;
    const num3 = num1 + num2;
    return num3 * num3;
};

console.log(sum3(1, 2));