/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:

Input: 16
Output: true
Example 2:

Input: 5
Output: false
Follow up: Could you solve it without loops/recursion?
*/

var isPowerOfFour = function(num) {
    const base = 4    
    let exp = 0;
    while (true) {
        let temp = base ** exp++; 
        if (temp > num) break;
        if (temp === num) return true;
    } 
    return false;
}

const _isPowerOfFour = (num) => {
    return Number.isInteger(Math.log(num) / Math.log(4));
}

console.log(_isPowerOfFour(16)); //Expect True
console.log(_isPowerOfFour(256)); //Expect True
console.log(_isPowerOfFour(262144)); //Expect True
console.log(_isPowerOfFour(15)); //Expect False
console.log(_isPowerOfFour(1111111)); //Expect False
console.log(isPowerOfFour(1)); //Expect True

