/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let arr = [];
    for (let x = 0; x < nums.length; x++) {
        if (arr.indexOf(nums[x]) !== -1) return true;
        arr.push(nums[x]);
    }
    return false;
};
