/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    let sortedArr = [];
    let res = [];
    intervals.forEach(i => sortedArr.push(i));
    sortedArr.sort((a,b) => a[0] - b[0]);
    intervals.forEach((i, idx) => {
        let x = sortedArr.find(e => (e[0] >= i[1]) && (e[1] !== i[1]));
        if (x) {
            res.push(intervals.findIndex(e => e[0] === x[0] && e[1] === x[1]));
        } else {
            res.push(-1);
        }
    });
    return res;
};
