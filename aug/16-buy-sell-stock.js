/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) return 0;
    let fb = Number.MIN_SAFE_INTEGER;
    let sb = Number.MIN_SAFE_INTEGER;
    let fs = 0;
    let ss = 0;
    prices.forEach(p => {
        fb = Math.max(fb, -p);
        fs = Math.max(fs,fb+p);
        sb = Math.max(sb,fs-p);
        ss = Math.max(ss,sb+p);
    });
    return ss;
};
