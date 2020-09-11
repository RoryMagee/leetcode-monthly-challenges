/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let currentMax=nums[0],currentMin=nums[0],prevMax=nums[0],prevMin=nums[0],res=nums[0];
    for(let  i=1;i<nums.length;i++){
        currentMax=Math.max(Math.max(prevMax*nums[i],prevMin*nums[i]),nums[i]);
        currentMin=Math.min(Math.min(prevMax*nums[i],prevMin*nums[i]),nums[i]);
        res=Math.max(currentMax,res);
        prevMax=currentMax;
        prevMin=currentMin;
    }
    return res;
};
