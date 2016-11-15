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
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    return dfs(root, 0);
};

var dfs = function(node, maxDepth) {
    if (!node) return maxDepth;

    return Math.max(dfs(node.left, maxDepth + 1), dfs(node.right, maxDepth + 1));
};