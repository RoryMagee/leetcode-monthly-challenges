function removeDuplicates(nums) {
    if (nums.length < 2) return nums.length;
    let p1 = 0;
    let p2 = 1;
    while (p2 <= nums.length) {
        if (nums[p1] === nums[p2]) {
            nums.splice(p2, 1);
        } else {
            p1++;
            p2++;
        }
    }
    console.log(nums);
    return nums.length;
}

removeDuplicates([1,2]);
