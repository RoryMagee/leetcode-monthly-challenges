/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1Arr = version1.split('.');
    let v2Arr = version2.split('.');
    fillArray(v1Arr, v2Arr);
    for (let i = 0; i < Math.max(v1Arr.length, v2Arr.length); i++) {
        if (v1Arr[i] && v2Arr[i]) {
            if (parseInt(v1Arr[i]) > parseInt(v2Arr[i])) {
                return 1;
            } else if (parseInt(v1Arr[i]) < parseInt(v2Arr[i])) {
                return -1;
            } else {
                continue;
            }
        } else if (v1Arr[i] && !v2Arr[i]) {
            return 1;
        } else {
            return -1;
        }
    }
    return 0;
};

function fillArray(arr1, arr2) {
    while (arr1.length < arr2.length) {
        arr1.push('0');
    }
    while (arr2.length < arr1.length) {
        arr2.push('0');
    }
}
