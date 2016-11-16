/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) {
        return [];
    }

    let val = root.val;
    if (!root.left && !root.right) {
        return val === sum ? [[val]] : [];
    }

    let allLeft = pathSum(root.left, sum - val);
    let allRight = pathSum(root.right, sum - val);
    let result = [];
    if (allLeft.length > 0) {
        result = allLeft.map((v) => [val, ...v]);
    }
    if (allRight.length > 0) {
        result = result.concat(allRight.map((v) => [val, ...v]));
    }
    return result;
};