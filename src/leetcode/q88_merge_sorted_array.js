/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1;
    while (i >= 0 || j >= 0) {
        if (j < 0 || nums1[i] >= nums2[j]) {
            nums1[i + j + 1] = nums1[i];
            i--;
        } else {
            nums1[i + j + 1] = nums2[j];
            j--
        }
    }
    return ;
};

var nums1 = [1,2,,];
var nums2 = [3,4]
merge(nums1, 4, nums2, 2);
console.log(nums1);

nums1 = [,];
nums2 = [3,4]
merge(nums1, 2, nums2, 2);
console.log(nums1);

nums1 = [1,2];
nums2 = []
merge(nums1, 2, nums2, 0);
console.log(nums1);