/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let alreadySeen = [];
    let dups = [];
    nums.forEach(num => {
        if (alreadySeen.indexOf(num) === -1) {
            alreadySeen.push(num);
        } else {
            dups.push(num);
        }
    }); 
    return dups;
};
