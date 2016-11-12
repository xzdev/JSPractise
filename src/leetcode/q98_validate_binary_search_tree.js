/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validBST(root, -Infinity, Infinity);
};

var validBST = function(node, min, max) {
    if (!node) {
        return true;
    }

    if (node.val <= min || node.val >= max) {
        return false;
    }
    if (node.left && node.left.val >= node.val) {
        return false;
    }
    if (node.right && node.right.val <= node.val) {
        return false;
    }

    return validBST(node.left, min, node.val) && validBST(node.right, node.val, max);
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var root = new TreeNode(9);
var left1 = new TreeNode(4);
var right1 = new TreeNode(10);
var left21 = new TreeNode(1);
var left22 = new TreeNode(5);
var right22 = new TreeNode(12);

root.left = left1;
left1.left = left21;
left1.right = left22;
root.right = right1;
right1.right = right22;

console.log(isValidBST(root));
