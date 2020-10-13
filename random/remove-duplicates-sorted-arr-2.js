function removeDuplicates(nums) {
    if (nums.length < 3) return nums.length;
    let p1 = 0;
    let p2 = 2;
    while (p2 <= nums.length) {
        if (nums[p1] === nums[p2]) {
            // There is a duplicate
            nums.splice(p2, 1);
        } else {
            // There isn't a duplicate
            p1++;
            p2++;
        }
    }
    return nums.length;
}

removeDuplicates([1,1,1,3,4,5,5,6,6,6]);
