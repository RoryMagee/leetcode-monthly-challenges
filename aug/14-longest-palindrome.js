/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return 1;
    let obj = {};
    let total = 0;
    let singleFound = false;
    for (let char of s) {
        obj.hasOwnProperty(char) ? obj[char]++ : obj[char] = 1;
    }
    for (let key in obj) {
        if (obj[key] > 1) { 
            total += obj[key] - (obj[key] % 2 === 0 ? 0 : (-1, obj[key] = 1));
        }
        if (singleFound === false && obj[key] === 1) {
            singleFound = true;
            total++;
        }
    } 
    return total;
};
