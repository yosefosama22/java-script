// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
// • Output Example: 130
// let x="123";
// let result= Number(x)+7;
// console.log(result);
// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// • Input Example: 0
// • Output Example: "Invalid"
// let  x =0;
// x= !x ? console.log("invalid") : console.log(x);
// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// • Output Example:1, 3, 5, 7, 9
// for ( i = 0; i <=10 ; i++) {
//    if (i%2==0) {
//     continue;
//    }
//    console.log(i);
// }
// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2,4]
// const arr=[1,2,3,4,5]
// let result = arr.filter(num=>num%2==0)
// console.log(result);
// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]
// const arr1=[1, 2, 3] ;
// const arr2= [4, 5, 6];
// let result = [...arr1,...arr2];
// console.log(result);
// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade)
// • Input Example: 2
// • Output Example: “Monday”
// let x= 2;
// switch (x) {
//     case 1:
//     console.log("sunday");
//      break;
//      case 2:
//     console.log("monday");
//      break;
//      case 3:
//     console.log("tuesday");
//      break;
//      case 4:
//     console.log("wednesday");
//      break;
//      case 5:
//     console.log("thursday");
//      break;
//      case 6:
//     console.log("friday");
//      break;
//      case 7:
//     console.log("saturday");
//      break;

//     default:
//         break;
// }
// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
// • Input: ["a", "ab", "abc"]
// • Output Example: [1, 2, 3]
// const arr=["a","ab","abc"]
// let newArr=arr.map(num=>num.length)
// console.log(newArr);
// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// • Input Example: 15
// • Output Example: “Divisible by both”
// function divisibleBy3or5(num) {
//   if (num %5 == 0 && num %3 == 0) {
//     console.log("divisible by both"); 
//   }  
//   else{
//     console.log("not divisable by both");
//   }
// }
// divisibleBy3or5(15);
// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
// • Input Example: 5
// • Output Example: 25
// const squared=(num)=>{
// return num**2;
// }
// console.log(squared(5));
// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'
// function destructe(user) {
//     let name =user.name;
//     let age =user.age;
//     return `${name} is ${age} years old`;
    
// }
// const person = {name: 'John', age: 25}
// console.log(destructe(person));
// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15
// function sum(...numbers) {
//     return numbers.reduce((total,num)=>total+num,0)
// }
// console.log(sum(1,2,3,4,5));
// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// • Output Example: “Success”
// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 3000);
//     });
// }
// getData().then((result) => {
//     console.log(result);
// });
// 13. Write a function to find the largest number in an array. (0.5 Grade)
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7
// let arr=[1,3,7,2,4];
// function largestNum(num) {
//     return Math.max(...num);
// }
// console.log(largestNum(arr));

// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]
// function getkeys(user) {
//   return Object.keys(user)
// }
// const person = {name: 'John', age: 30}
// console.log(getkeys(person));
// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]
// let str="The quick brown fox";
// let result= str.split(" ")
// console.log(result);
// 1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
// forEach() executes a callback function for each array element, but it doesn't support break or continue.
// for...of iterates over iterable elements directly and supports break and continue.
// Use forEach() for simple iteration and for...of when you need more control over the loop (Every element).
// 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)
//  hoisting : is that js take any decleration upward ther are processed before any execution like a function or console.log() ,Variables declared with var are initialized with undefined, while let and const are not initialized
//  TDZ : It is the period between entering a scope and initializing a let or const variable. Accessing the variable during this period causes a ReferenceError.
// Example:
// console.log(a); // undefined
// var a = 10;
// console.log(b); // ReferenceError
// let b = 20;
// 3. What are the main differences between == and ===? (0.5 Grade)
// == : compare values only between to variables named loose equality
// === : compare values and type of variables named strict equality 
// 4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)
// try-catch is used for error handling in JavaScript.
// - try: Contains code that may cause an error.
// - catch: Handles the error if it occurs.
// It is important in async operations because it handles errors from asynchronous tasks, such as API requests, and prevents unhandled errors.
// 5. What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
// Type Conversion: It is the process that i manually change a data type using functions like Number(), String(), or Boolean().
// Type Coercion: It is the automatic conversion of one data type to another by JavaScript .
// Examples:
// // Type Conversion
// Number("10"); // 10
// // Type Coercion
// "5" + 2; // "52"