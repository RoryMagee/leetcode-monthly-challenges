/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let odd = A.filter(num => num % 2 !== 0);
    let even = A.filter(num => num % 2 === 0);
    return [...even, ...odd];
};
