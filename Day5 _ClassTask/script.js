// Q1. 
// let obj = {};
// obj.name = "John";
// obj.surname = "Smith";
// obj.name = "Pete";
// let check = Object.keys(obj).length;
// delete obj.name;
// console.log(obj);
// console.log(check);



// Q2. 
// function isEmpty(obj){
//     if(Object.keys(obj).length === 0){
//         return true;
//     }return false;
// }

// console.log(isEmpty(obj));



// Q3. 
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//     }
    
// function totalSalaries(obj){
//     let getKey = Object.keys(obj);
//     let sumOfSalaries = 0;
//     for(let i = 0; i < getKey.length; i++){
//         sumOfSalaries += obj[getKey[i]];
//     }
//     return sumOfSalaries;
// }

// console.log(totalSalaries(salaries));



// Q4. 

// let calculator = {
//     a : 0,
//     b : 0,
//     read : function(){
//         let num = prompt("Please Enter the first number");
//         this.a = parseInt(num);
//         num = prompt("Please Enter the second number");
//         this.b = parseInt(num);
//     },

//     sum : function(){
//         return this.a + this.b;
//     },

//     mul : function(){
//         return this.a * this.b;
//     }
// }
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// function decimalToRoman(num){
//     let n = num;
//     const romanNumerals = [
//         { value: 1000, symbol: 'M' },
//         { value: 900, symbol: 'CM' },
//         { value: 500, symbol: 'D' },
//         { value: 400, symbol: 'CD' },
//         { value: 100, symbol: 'C' },
//         { value: 90, symbol: 'XC' },
//         { value: 50, symbol: 'L' },
//         { value: 40, symbol: 'XL' },
//         { value: 10, symbol: 'X' },
//         { value: 9, symbol: 'IX' },
//         { value: 5, symbol: 'V' },
//         { value: 4, symbol: 'IV' },
//         { value: 1, symbol: 'I' },
//       ];

//       let result = "";
//       for(let i = 0; i < romanNumerals.length; i++){
//         while(n >= romanNumerals[i].value){
//             result += romanNumerals[i].symbol;
//             n -= romanNumerals[i].value;
//         }
//       }
//       return `This is ${num}(${result}).`;
// }

// console.log(decimalToRoman(24));


// let str  = "Banti kumar singh";
// let arr = str.split("");
// // let arr1 = str.split('');
// // console.log(arr);
// // console.log(arr1);
// let str1 = arr.join('');
// console.log(str1);
// function rot13(str){
//     let arr = str.split('');
//     for(let i = 0; i < arr.length; i++){
//         let ch = arr[i];
//         if(ch >= 'A' && ch <= 'Z'){
//             let chAsscaiVal = ch.charCodeAt(0);
//             console.log(chAsscaiVal);
//             let replacCh = ((chAsscaiVal - 65 + 13) % 26 ) + 65;
//             console.log(replacCh);
//             arr[i] = String.fromCharCode(replacCh);
//             console.log("=================")
//         }
//     }
//     return arr.join('');
// }
// console.log(rot13("SERR PBQR PNZC"));


// const input = [12, 46, 32, 64];
// input.sort((a, b) => a - b);

// input.reduce(
//   (accumulator, currentValue, index, array) => {
//     accumulator.mean += currentValue / array.length;

//     if (array.length % 2 === 0) {
//       // if the array has an even number of elements
//       if (index === array.length / 2 - 1) {
//         accumulator.median += currentValue;
//       } else if (index === array.length / 2) {
//         accumulator.median += currentValue;
//         accumulator.median /= 2;
//       }
//     } else {
//       // if the array has an odd number of elements
//       if (index === (array.length - 1) / 2) {
//         accumulator.median = currentValue;
//       }
//     }

//     return accumulator;
//   },
//   { mean: 0, median: 0 }
// );

// const input = [12, 46, 32, 64];
// function findMeanAndMadian(arr){
//     arr.sort((a,b)=> a - b);
//     let obj = {
//         mean: 0,
//         madian: 0
//     }
//     let arrMean = arr.reduce(function(accu, num, idx , arr){
//         return obj.mean = accu + num / arr.length;
//     },0);

//     let mid = Math.floor(arr.length/2);

//     if(arr.length % 2 === 0){
//         obj.madian = (arr[mid - 1] + arr[mid]) / 2;
//     }else{
//         obj.madian = arr[mid];
//     }

//     return obj;
// }

// console.log(findMeanAndMadian(input));
let cla = [1,2,3,4,5,6,7,];
console.log(cla);