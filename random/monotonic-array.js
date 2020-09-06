/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if (A.length <= 2) return true;
    let inc = false;
    if (A[0] > A[A.length-1]) {
        inc = true;
    } else {
        inc = false;
    }
    for (let i = 0; i < A.length-1; i++) {
        if (A[i] > A[i + 1]) {
            if (!inc) return false;
        } else if (A[i] < A[i + 1]){
            if (inc) return false;
        } else {
            continue;
        }
    }
    return true;
};
