const { performance } = require('perf_hooks');
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let odd = A.filter(num => num % 2 !== 0);
    let even = A.filter(num => num % 2 === 0);
    return [...even, ...odd];
};

var sortArrayByParity2 = function(A) {
    let res = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            res.unshift(A[i]);
        } else {
            res.push(A[i]);
        }
    }
    return res;
};

let input = [123,1,32,645,6,34,12,3,6,7,4,563,41,3, 12,3234,34,5,546,4567,56,7,56,734,523,4,56,58,67,89768,9,67,4,56,345,23,5,3546,54,7,567,567,534,5,4325,36,4556];

console.time('sortArrayByParity');
sortArrayByParity(input);
console.timeEnd('sortArrayByParity');

console.time('sortArrayByParity2');
sortArrayByParity2(input);
console.timeEnd('sortArrayByParity2');

