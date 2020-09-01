/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    let resStr = '';
    for (let i = 0; i < 4; ++i) {
        for(let j = 0; j < 4; ++j) {
            for (let k = 0; k < 4; ++k) {
                if (i === j || j === k || k === i) continue;
                let hh = A[i] + '' + A[j];
                let mm = A[k] + '' + A[6-i-j-k];
                let _time = hh + ':' + mm;
                if (hh < "24" && mm < "60" && _time > resStr) resStr = _time;
            }
        }
    }
    return resStr;
};
