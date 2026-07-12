
// Task 7.1 Variables
let myName = "Moise Nyarugabo";
let myAge = 23;
let isStudent = true;
const favoriteColors = ["Blue", "Black", "White"];
const today = new Date();

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Student:", isStudent);
console.log("Favorite Colors:", favoriteColors);
console.log("Today's Date:", today);

// typeof examples

console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isStudent);
console.log(typeof favoriteColors);


// Task 7.2 Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);

let count = 0;

count++;
console.log(count);

count--;
console.log(count);

let firstName = "Moise";
let lastName = "Nyarugabo";

let fullName = firstName + " " + lastName;

let greeting = `Hello, ${firstName}!`;

let message = `Your name has ${firstName.length} characters.`;

console.log(fullName.toUpperCase());

console.log(fullName.toLowerCase());

console.log(firstName.charAt(0));

console.log(fullName.includes("Moise"));

console.log(5 > 3);

console.log(5 < 3);

console.log(5 === 5);

console.log(5 == "5");

console.log(5 !== 3);

console.log(true && true);

console.log(true || false);

console.log(!true);

// Challenge

let age = 23;

let ageDays = age * 365;

let ageHours = ageDays * 24;

let turn100 = (new Date().getFullYear() - age) + 100;

console.log("Age in Days:", ageDays);

console.log("Age in Hours:", ageHours);

console.log("Turn 100 in:", turn100);


/*Task 7.3 Functions*/

function greet(name) {
    return `Hello, ${name}!`;
}

const add = function(a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
};

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {

    let names = fullName.split(" ");

    return names[0][0] + names[1][0];
}

function reverseString(str) {

    return str.split("").reverse().join("");

}

function greetUser(name = "Guest", greeting = "Hello") {

    return `${greeting}, ${name}!`;

}

function calculateTip(bill, tipPercent = 15) {

    return bill * (tipPercent / 100);

}

console.log(greet("Moise"));

console.log(add(5, 7));

console.log(multiply(3, 5));

console.log(divide(10, 2));

console.log(calculateArea(4, 5));

console.log(celsiusToFahrenheit(25));

console.log(isEven(8));

console.log(getInitials("Moise Nyarugabo"));

console.log(reverseString("JavaScript"));

console.log(greetUser());

console.log(calculateTip(1000));

/*Task 7.4 */
/* 1st Function  */
function getGrade(score) {
/*control flow*/
    if (score >= 90) {

        return "A";

    } else if (score >= 80) {

        return "B";

    } else if (score >= 70) {

        return "C";

    } else if (score >= 60) {

        return "D";

    } else {

        return "F";

    }

}

console.log(getGrade(87));
/*2nd function  */
function getDayName(dayNumber) {

    switch(dayNumber) {

        case 0:
            return "Sunday";

        case 1:
            return "Monday";

        case 2:
            return "Tuesday";

        case 3:
            return "Wednesday";

        case 4:
            return "Thursday";

        case 5:
            return "Friday";

        case 6:
            return "Saturday";

        default:
            return "Invalid Day";
    }

}

console.log(getDayName(5));

// Numbers 1-100

for(let i=1;i<=100;i++){

    console.log(i);

}

// Even numbers

for(let i=2;i<=50;i+=2){

    console.log(i);

}

// FizzBuzz

for(let i=1;i<=100;i++){

    if(i%3===0 && i%5===0){

        console.log("FizzBuzz");

    }else if(i%3===0){

        console.log("Fizz");

    }else if(i%5===0){

        console.log("Buzz");

    }else{

        console.log(i);

    }

}

// Triangle

for(let i=1;i<=5;i++){

    console.log("*".repeat(i));

}


/*Mini Project: Calculator*/

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        return "Error! Cannot divide by zero.";
    }
    return a / b;
}

// Modulus
function modulus(a, b) {
    return a % b;
}

// Power
function power(a, b) {
    return a ** b;
}

/*Main calculator function*/
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        case "%":
            return modulus(num1, num2);

        case "**":
            return power(num1, num2);

        default:
            return "Invalid operator";
    }
}

// Test the calculator
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Error message
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 3));   // 8
