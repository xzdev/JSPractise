var findSmallestInSeq = function (nums) {
    return nums.sort((a, b) => {
        return a - b;
    });
};

var findNextBiggerNum = function(nums, value) {
    let result;
    let index;
    nums.forEach((v, i) => {
        if ((!result && v > value) || (v < result && v > value)) {
            result = v;
            index = i;
        }
    });
    return {
        result: result,
        index: index
    }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len = nums.length;

    // boundary case, there is no number or just one number
    if(len <= 1) {
        return nums;
    }

    let lastNum = nums[len - 1];
    let subNum = [];

    for (let i = len - 2; i >= 0; i--) {
        let currentNum = nums[i];
        subNum.push(lastNum);

        if (lastNum > currentNum) {
            let {result, index} = findNextBiggerNum(subNum, currentNum);
            nums[i] = result;
            subNum.splice(index, 1, currentNum);
            let newSubNum = findSmallestInSeq(subNum);
            newSubNum.forEach((v) => {
                nums[++i] = v;
            });
            return nums;
        }

        lastNum = currentNum;
    }

    // did not return? that means cannot find the next maximum, then return the smallest
    let newNums = findSmallestInSeq(nums);
    nums.forEach((v, i) => {
        nums[i] = newNums[i];
    });

    return nums;
};

console.log(nextPermutation([1,2,3])); //[1,3,2]
console.log(nextPermutation([3,2,1])); //[1,2,3]
console.log(nextPermutation([2,3,1])); //[3,1,2]
console.log(nextPermutation([3,1,2])); //[3,2,1]
console.log(nextPermutation([1,3,2])); //[2,1,3]
console.log(nextPermutation([1,1,5])); //[1,5,1]
console.log(nextPermutation([1,5,2])); //[2,1,5]

7986
8679