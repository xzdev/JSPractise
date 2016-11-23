/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (!nums || nums.length <= 1) {
        let [result] = nums;
        return result;
    }

    return binarySearchMin(nums, 0, nums.length - 1);
};

let binarySearchMin = (nums, start, end) => {
    if (start === end) {
        return nums[start];
    } else if (start + 1 === end) {
        return Math.min(nums[start], nums[end]);
    }

    let mid = Math.floor((start + end) / 2);
    if (nums[start] < nums[mid]) {
        return Math.min(nums[start], binarySearchMin(nums, mid, end));
    } else if (nums[start] === nums[mid]) {
        return Math.min(binarySearchMin(nums, start, mid), binarySearchMin(nums, mid, end));
    } else {
        return binarySearchMin(nums, start, mid);
    }
}

// console.log(findMin([3,3,1,3]));