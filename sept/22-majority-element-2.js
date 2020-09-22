/**
 * @param {number[]} nums
 * @return {number[]}
 */
//var majorityElement = function(nums) {
//    let o = Math.floor(nums.length/3);
//    let obj = {};
//    nums.forEach(i => {
//        if (obj[i]) {
//            obj[i]++;
//        } else {
//            obj[i] = 1;
//        }
//    });
//    let res = [];
//    for (let key in obj) {
//        if (obj[key] > o) {
//            res.push(key);
//        }
//    }
//    return res;
//}

var majorityElement = function(nums) {
    let obj = {};
    let res = [];
    nums.forEach(nums => obj[nums] ? obj[nums]++ : obj[nums] = 1);
    for (let key in obj) {
        if (obj[key] > Math.floor(nums.length / 3)) res.push(key);
    }
    console.log(res);
    return res;
}

majorityElement([1,1,1,3,3,2,2,2]);
