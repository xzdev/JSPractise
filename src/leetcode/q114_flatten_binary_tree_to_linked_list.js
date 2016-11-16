/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) {
        return;
    }

    flatNode(root);
};

var flatNode = (node) => {
    if (!node.left && !node.right) {
        return node;
    }

    if (node.left) {
        let leftEnd = flatNode(node.left);
        let rightEnd = null;
        if (node.right) {
            rightEnd = flatNode(node.right);
        }
        leftEnd.right = node.right;
        node.right = node.left;
        node.left = null;
        return rightEnd || leftEnd;
    } else {
        let rightEnd = flatNode(node.right);
        return rightEnd;
    }
};