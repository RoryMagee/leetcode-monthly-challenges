/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    const charArr = s.split('');
    let total = 0;
    const _a = 64;
    for(let x = 0; x < charArr.length; x++) {
        console.log('multiplier', charArr[x].charCodeAt(0)-_a)
        total += Math.pow(26, charArr.length-(x+1)) * (charArr[x].charCodeAt(0)-_a);
    }
    return total;
};
