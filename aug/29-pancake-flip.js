/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
    let res = [];
    for (let x = A.length; x > 0; x--) {
        let idx = A.indexOf(x);
        flip(A, idx);
        flip(A, x-1);
        res.push(idx+1);
        res.push(x);
    }
    return res;
};


const swap = function(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

const flip = function(A, j) {
    let i = 0;
    while (i < j) {
        let tmp = A[i];
        A[i] = A[j];
        A[j] = tmp;
        i++;
        j--;
    }
}

