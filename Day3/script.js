// let amount = 1000;
// if(amount >= 1000){
//     let discount = (amount * 10)/100 ;
//     console.log(amount -discount);
// }else if(amount < 1000 && amount > 500){
//     let discount = (amount * 5)/100 ;
//     console.log(amount - discount);
// }else if (amount > 0 && amount < 500){
//     console.log(amount);
// }




// function sum(num1, num2) {
//     return num1 + num2;
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// // stdin => standard input
// // stdout => standard output
// let num1, num2;

// console.log(process.stdin);

// readline.question('Give a number : ', function abc(num) {
//     num1 = parseInt(num); // Ensure num1 is a number
//     // num1 = num;
//     readline.question('Give another number : ', num => {
//         num2 = parseInt(num); // Ensure num2 is a number
//         // num2 = num;
//         readline.close();
//         console.log(`The sum is: ${sum(num1, num2)}`); // string literal
//         // `The sum is: ${sum(num1, num2)}`;
//         // console.log('The sum is: ' + sum(num1, num2));
//     });
// });

// let a = 10;
// f(a);
// function f(b){
//     let a = 10 + b;
//     // return a;
//     console.log(a);
// }
// // console.log(a);

// let a = '3' + 1;
// let b = '3' - 1;
// let c = '4' - '3';
// let d = '4' + '3';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(typeof a);
// console.log( typeof b);
// console.log( typeof c);
// console.log( typeof d);


const fruits = ["apple", "banana", "orange"];
const fruitString = fruits.join(", "); // Using a comma and space as separator
console.log(fruitString); // Output: "apple, banana, orange"
console.log(typeof fruitString); // Output: "apple, banana, orange"
console.log(typeof fruits); // Output: "apple, banana, orange"
