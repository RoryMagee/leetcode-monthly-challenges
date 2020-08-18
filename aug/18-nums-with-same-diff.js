/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
    if (N === 1) return [0,1,2,3,4,5,6,7,8,9];
    let res = [];
    const h = function(l,n) {
        if (l === 0) {
            res.push(n);
            return;
        }
        let a = n % 10;
        if (a + K < 10) {
            h(l-1,n*10+a+K);
        }
        if (K!=0 && n%10-K>-1) {
            h(l-1, n*10+a-K);
        }
    }
    for(let x = 1; x <= 9; x++) {
        h(N-1, x);
    }
    return res;
};

