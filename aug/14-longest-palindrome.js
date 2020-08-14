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
        if (obj.hasOwnProperty(char)) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    console.log(obj);
    for (let key in obj) {
        if (obj[key] > 1) { 
            if (obj[key] % 2 === 0) {
                total += obj[key];
            } else {
                total += obj[key]-1;
                obj[key] = 1;
            }
        }
        if (singleFound === false && obj[key] === 1) {
            singleFound = true;
            total++;
        }
    } 
    return total;
};
