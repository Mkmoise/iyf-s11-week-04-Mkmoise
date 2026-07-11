
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
