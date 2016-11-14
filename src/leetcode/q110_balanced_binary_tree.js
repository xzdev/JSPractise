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
var isBalanced = function(root) {
    if (!root) {
        return true;
    }

    traversal(root, 0);
    console.log(maxDepth, minDepth);
    return maxDepth - minDepth <= 1;
};

var maxDepth = 0;
var minDepth = Infinity;
var traversal = function(root, depth) {
    if(!root.left || !root.right) {
        if (depth > maxDepth) {
            maxDepth = depth;
        }
        if (depth < minDepth) {
            minDepth = depth;
        }
    }

    if (root.left) {
        traversal(root.left, depth + 1);
    }
    if (root.right) {
        traversal(root.right, depth + 1);
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let n1 = new TreeNode(2);
let n2 = new TreeNode(1);
let n3 = new TreeNode(3);
let n4 = new TreeNode(5);
let n5 = new TreeNode(7);
let n6 = new TreeNode(9);
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n4.left = n6;
console.log(isBalanced(n1));
