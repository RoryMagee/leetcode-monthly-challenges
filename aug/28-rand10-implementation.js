/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    let val = 7*rand7()+rand7();
    while (val > 50 || val < 11) {
        val = 7*rand7()+rand7();
    }
    return val % 10 !== 0 ? val % 10 : 10;
};
