

// Q1. String Reversal: Write a function to reverse a given string in JavaScript without using built-in reverse functions.

// function reverseString(str){
//     let reverseStr = "";
//     for(let i = 0; i < str.length; i++){
//         let ch = str.charAt(i);
//         reverseStr = ch + reverseStr;
//     }
//     console.log(reverseStr);
// }

// let str = "Bunny Singh";
// let str2 = "Hello World!"
// reverseString(str);
// reverseString(str2);


// Q2. Anagram check
// function validAnagram(str1, str2) {
//     if(str1.length != str2.length){
//         return false;
//     }
//     let arr1 = str1.split('');
//     arr1.sort();
//     let arr2 = str2.split('');
//     arr2.sort();
//     for(let i = 0; i < str1.length; i++){
//         if(arr1[i] != arr2[i]){
//             return false;
//         }
//     }
//     return true;
// };

// let str1 = "anagram", str2 = "gramana";
// let str3 = "abc", str4 = "dca";
// console.log(validAnagram(str1, str2));
// console.log(validAnagram(str3, str4));


// Q3. Array Intersection: Given two arrays, write a function to find their intersection (common elements).

// function arrayIntersection(nums1, nums2) {
//     const set = new Set();
//     for(let ele of nums1){
//         set.add(ele);
//     }

//     let arr = [];
//     for(let ele of nums2){
//         if(set.has(ele)){
//             arr.push(ele);
//             set.delete(ele);
//         }
//     }
//     return arr;
// };
// let arr1 = [1, 3, 2, 3, 6, 3, 2];
// let arr2 = [1, 3, 2, 3, 6, 3, 2, 7, 2, 10, 30];
// console.log(arrayIntersection(arr1, arr2));





// String Palindrome: Create a function to check if a given string is a palindrome (reads the same forwards and backwards) while ignoring non-alphanumeric characters.
// function isPalindrome(s) {
//     let str = "";
//     for(let i = 0; i < s.length; i++){
//         let ch = s.charAt(i).toLowerCase();
//         if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')){
//             str += ch;
//         }
//     }
//     return checkPalindrome(str);
// };
// function checkPalindrome(str){
//     let i = 0;
//     let j = str.length -1;
//     while(i < j){
//         if(str.charAt(i) != str.charAt(j)){
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }
// console.log(isPalindrome("asdfghjklkjhgfdsa"));
// console.log(isPalindrome("This  is a fature"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));



// Q5  Array Rotation: Implement a function to rotate an array to the right by a specified number of positions.

// let arr = [1, 4, 5, 3, 6, 4];
// let k = 3
// function rotate(arr, k){
//     let n = arr.length;
//     k = k + n;
//     k = k % n;
//     reverse(arr, n - k , n - 1);
//     reverse(arr, 0 , n - k - 1);
//     reverse(arr, 0 , n - 1);
//     return arr;
// }

// function reverse(arr, i , j){
//     while(i < j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }

// console.log(rotate(arr));




// Q6. String Compression: Write a function to perform basic string compression using the counts of repeated characters. For example, "aabcccccaaa" would become "a2b1c5a3."
// let chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
// function compressChar(chars){
//     let sb = '';
//     let i = 0;
//     let j = 1;
//     while (j <= chars.length) {
//         if (j === chars.length || chars[i] !== chars[j]) {
//             const len = j - i;
//             sb += chars[i];
//             if (len > 1) {
//                 sb += len;
//             }
//             i = j;
//         }
//         j++;
//     }
//     for (let k = 0; k < sb.length; k++) {
//         chars[k] = sb.charAt(k);
//     }

//     let ans = "";
//     for(let i = 0; i < chars.length; i++){
//         ans += chars[i];
//     }
//     return ans;
// }
// console.log(compressChar(chars));

// Q7. Array Sum: Write an algorithm to find the pair of elements in an array that adds up to a specific target sum.
// let nums = [2,7,11,15], target = 9;
// function twoSum(nums , target){
//     const obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (obj[nums[i]] == undefined) {
//             obj[nums[i]] = [];
//         }
//         obj[nums[i]].push(i);
//     }
//     for (const key in obj) {
//         let anotherKey = target - key;
//         if (obj[anotherKey]) {
//             if (anotherKey == key) {
//                 if (obj[key].length > 1) {
//                     return [obj[key][0], obj[key][1]];
//                 }
//             } else {
//                 return [obj[key][0], obj[anotherKey][0]];
//             }
//         }
//     }
// }
// console.log(twoSum(nums, target));


// Q8. Longest Substring Without Repeating Characters: Write an algorithm to find the length of the longest substring without repeating characters in a given string.
// let str = "abcabcbb";
// function longestSubstingNonRepeatingCharacter(s){
//     let set = new Set();
//         let n = s.length;
//         if(n === 1){
//             return 1;
//         }
//         let maxLen = 0;
//         let i = 0;
//         let j = 0;
//         while(j < n){
//             let ch = s.charAt(j);
//             if(!set.has(ch)){
//                 set.add(ch);
//                 maxLen = Math.max(maxLen, j - i + 1);
//                 j++;
//             }else{
//                 set.delete(s.charAt(i));
//                 i++;
//             }
//         }
//         return maxLen;
// }
// console.log(longestSubstingNonRepeatingCharacter(str));