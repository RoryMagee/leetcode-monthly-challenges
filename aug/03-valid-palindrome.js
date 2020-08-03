/**
 * @param {string} s
 * @return {boolean}

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 

Constraints:

s consists only of printable ASCII characters.
*/

var isPalindrome = function(s) {
    let charArr = [];
    for (let char of s.toLowerCase()) {
        if ((char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) || 
            (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
            charArr.push(char);
        }
    }
    for(let x = 0; x < charArr.length/2; x++) {
        if (charArr[x] !== charArr[charArr.length-x-1]) return false;
    }  
    return true;
};
