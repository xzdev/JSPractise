/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    
    let max, min, result;
    max = min = result = nums[0];
    for (let i = 1, len = nums.length; i < len; i++) {
        let value = nums[i];
        [max, min] = [Math.max(value, value * max, value * min), Math.min(value, value * max, value * min)];
        result = Math.max(result, max);
    }
    return result;
};


// [-4, -5, -10, -1]
// -4 
// 20, 
// 50, 

// console.log(maxProduct([0]));
// console.log(maxProduct([1,0,-1,2,3,-5,-2]));
// console.log(maxProduct([-1, 2]));
// console.log(maxProduct([-1, 13, 1]));
// console.log(maxProduct([-4, -5, -10]));
// console.log(maxProduct([-4, -5, -10, -1]));