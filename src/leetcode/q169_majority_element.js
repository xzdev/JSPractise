/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let v = nums[0];
    let count = 1;

    for (let i = 1, len = nums.length; i < len; i++) {
        if (nums[i] === v) {
            count++;
        } else {
            if (count > 1) {
                count--;
            } else {
                v = nums[i];
                count = 1;
            }
        }
    }
    return v;
};

console.log(majorityElement([2,2,4,4,4,4,2,2,4]));