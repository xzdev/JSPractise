/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums.length === 0) {
        return [[]];
    } else if (nums.length === 1) {
        return [[], nums];
    }

    let value = nums[nums.length - 1];
    const lastSubsets = subsets(nums.slice(0, nums.length - 1));
    return lastSubsets.concat(lastSubsets.map((v)  => v.concat(value)));
};

// [1,2] => [[], [1], [2], [1,2]]
// [1,2,3] => [[], [1], [2], [1,2], [3], [1, 3], [2, 3], [1,2,3]]
// 
// 
console.log(subsets([1,2,3]));