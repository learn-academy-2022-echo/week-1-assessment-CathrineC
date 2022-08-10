// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code: 
// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"

// const fruitBasket = (fruit1, fruit2) => {
//     if (fruit1.length > fruit2.length){
//         return fruit1
//     }else {
//         return fruit2
//     }
// }
// console.log(fruitBasket(fruit1, fruit2))
// console.log(fruitBasket(fruit3, fruit4))

// console.log("=====fruits")


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
// I will create a Function to identify the temperature of the given variables.
// I will create 3 conditions that will return statements whether a number is above boiling point, at boiling point, or below boiling point
// I need to identify the range that will identify the group where the variables will belong to.

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (temp) => {
    if (temp === 212){
        return `${temp} is at boiling point`
    } else if (temp <= 211){
        return `${temp} is below boiling point`
    } else if (temp >= 213){
        return `${temp} is above boiling point`
    }
}
console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))

console.log("=====boilingPoint")

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code: 
// I will create a variable that can store the combination of the two given arrays
// I will combine the 2 given arrays using .concat
// I will return the length of the combined array using .length

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

var comboNumbers = (myNumbers1.concat(myNumbers2)) 
console.log(comboNumbers.length)

console.log("=====comboNumbers")

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
// In order for me to manipulate the value of the string, I have to convert the string into an array using function code .split().
// Now that it is an array, I can reverse the characters in the array using function code .reverse.
// After the reverse, I can make the characters in the array a string using function code .join. 

const currentCohort = "Echo 2022"

console.log(currentCohort.split("").reverse().join(""))

console.log("=====reverse")

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// I need to create a loop to check the data inside the array if it's odd or even.
// I need to start from the first number in index 0 and let it run until the last index.
// I need to assign the text "odd" if the number is odd, and display "even" if the number is even.

const myArray = [13, 34, 5, 10, 27, 42]

for (let i = 0; i < myArray.length; i++){
    if (i % 2 !==0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}

console.log("=====oddEven")

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// I need to create a function by comparing the two numbers and determine which one is the higher number.
// I need to create a condition that will deduct the smaller number from the higher number so that it will not give me a negative number.


// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const numberDiff = (firstNum, secondNum) => {
    if (firstNum > secondNum){
        return `${firstNum - secondNum}`
    }
    return `${secondNum - firstNum}`
}
console.log(numberDiff(number1, number2))
console.log(numberDiff(number3, number4))

console.log("=====difference")