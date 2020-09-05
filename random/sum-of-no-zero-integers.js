/**
 * @param {number} n
 * @return {number[]}
Given an integer n. No-Zero integer is a positive integer which doesn't contain any 0 in its decimal representation.

Return a list of two integers [A, B] where:

A and B are No-Zero integers.
A + B = n
It's guarateed that there is at least one valid solution. If there are many valid solutions you can return any of them.
*/
var getNoZeroIntegers = function(n) {
    let top = n - 1;
    let bottom = 1;
    while (true) {
        topStr = top.toString();
        bottomStr = bottom.toString();
        if (topStr.indexOf('0') === -1 && bottomStr.indexOf('0') === -1) {
            return [bottom, top];
        } else {
            top--;
            bottom++;
        }
    }
};
