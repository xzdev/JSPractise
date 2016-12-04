/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // all zeros, return one zero
    let notAllZero = nums.some((v) => v !== 0);
    if (!notAllZero) {
        return '0';
    }

    const numStrs = nums.map((v) => v.toString());
    let zeroCount = 0;
    return numStrs.sort(sortFunc).join('');
};

var sortFunc = (a, b) => {
    return `${b}${a}` > `${a}${b}` ? 1 : -1;
};

// console.log(largestNumber([3, 30, 34, 5, 9]));
// console.log(largestNumber([3, 30, 34, 5, 9, 33, 333, 334, 32, 22, 4444]));
// console.log(largestNumber([121,12]));
// console.log(largestNumber([2,1]));
// console.log(largestNumber([1,2]));
// console.log(largestNumber([0,0]));
// console.log(largestNumber([1,2,3,4,5,6,7,8,9,0]));