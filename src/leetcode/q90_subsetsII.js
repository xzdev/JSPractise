/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if (nums.length === 1) {
        return [[], nums];
    } else if (nums.length === 0) {
        return [[]];
    }

    let lastNum = nums[nums.length - 1];
    let subNums = nums.slice(0, nums.length - 1);
    let subNumSets = subsetsWithDup(subNums);

    let mergedSet = [];
    let hitMap = genHitmap(subNumSets);

    for (let v of subNumSets) {
        let newV = [...v, lastNum];
        if (!hitMap[sig(newV)]) {
            // did not find a match, add into mergedSet
            mergedSet.push(newV);
        }
    }
    return subNumSets.concat(mergedSet);
};

var sig = function(arr) {
    return arr.sort().join('*');
};

var genHitmap = function(arr) {
    const hitMap = {};
    for (let i of arr) {
        hitMap[sig(i)] = true;
    }
    return hitMap;
}

console.log(subsetsWithDup([]));
console.log(subsetsWithDup([1]));
console.log(subsetsWithDup([1,2]));
console.log(subsetsWithDup([1,1]));
console.log(subsetsWithDup([1,2,2]));