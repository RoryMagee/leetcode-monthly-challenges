/**
 * @param {number[]} A
 * @return {boolean}
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.
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
