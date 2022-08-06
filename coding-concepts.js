// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: When verified, the answer is 10. The function .length determines the number of characters in the string declared by const cohort. 


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: When verified, the answer is o. The number inside the [] calls the index or position from the string declared by const greeting. 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: When verified, the answer is Ruby. The variable index inside the [] calls the string on position 1 from the array declared by const languages. 


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: When verified, the answer is error. This is because the function .toUpperCase can only work on strings not array. One way to correct the code is to convert the array into string using .join() and then use the .toUpperCase() to make the characters into Upper Case.
console.log(weekendDays.join(" ").toUpperCase().split(" "))


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: error
// b) Verify and explain: When verified, the answer is number. The outcome is 3 and the operator typeof identifies what type is 3 which is a number. The space between typeof and dataTypes.length is just to separate the operator and the operand.
