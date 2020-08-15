/**
 * @param {number[][]} intervals
 * @return {number}
 */
// 0 = blank
// 1 = start/end
// 2 = middle
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;
    intervals.sort((a,b) => {
        return a[1] - b[1];
    });
    let res = 0;
    let end = intervals[0][1];
    for (let x = 1; x < intervals.length; x++) {
        if (intervals[x][0] < end) {
            res++;
        } else {
            end = intervals[x][1];
        }
    }
    return res;
};
