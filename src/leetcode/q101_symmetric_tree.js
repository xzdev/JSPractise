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
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    return (!root.left && !root.right) || !!(root.left && root.right && sameValue(root.left, root.right));
};

var sameValue = function(node1, node2) {
    if (node1 && !node2 || !node1 && node2) {
        return false;
    }
    return (!node1 && !node2) || (node1.val === node2.val && sameValue(node1.left, node2.right) && sameValue(node1.right, node2.left));
}