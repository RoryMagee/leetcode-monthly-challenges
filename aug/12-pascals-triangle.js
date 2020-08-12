/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    let res;
    function re(arr) {
        if (arr.length-1 === rowIndex) {
            res = arr;
            return;
        }
        let startPointer = 0;
        let endPointer = 1;    
        let newArr = [];
        while (endPointer < arr.length) {
           newArr.push(arr[startPointer++] + arr[endPointer++]); 
        }
        newArr.unshift(1);
        newArr.push(1);
        re(newArr);
    }
    let startArr = [1,1];
    re(startArr);
    console.log(res);
    return res;
};
