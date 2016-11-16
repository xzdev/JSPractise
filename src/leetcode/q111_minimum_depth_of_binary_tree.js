/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return 1;
    }
    let minLeft, minRight;
    minLeft = minDepth(root.left) + 1;
    minRight = minDepth(root.right) + 1;

    if (!root.left) {
        return minRight;
    } else if (!root.right) {
        return minLeft;
    } else {
        return Math.min(minLeft, minRight);
    }

};

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }
