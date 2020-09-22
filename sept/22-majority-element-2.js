/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let o = Math.floor(nums.length/3);
    let obj = {};
    nums.forEach(i => {
        if (obj[i]) {
            obj[i]++;
        } else {
            obj[i] = 1;
        }
    });
    let res = [];
    for (let key in obj) {
        if (obj[key] > o) {
            res.push(key);
        }
    }
    return res;
}
