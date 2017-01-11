/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) {
        return [];
    }

    const node = root;
    // if it is a leaf node
    if (!node.left && !node.right) {
        return [node.val];
    } else if (!node.left && node.right || node.left && !node.right) {
        const subTree = node.right || node.left;
        return [node.val, ...rightSideView(subTree)];
    } else {
        const leftValues = rightSideView(node.left);
        const rightValues = rightSideView(node.right);
        return rightValues.length > leftValues ? [node.val, ...rightValues] : [node.val, ...rightValues, ...leftValues.slice(rightValues.length)];
    }

};

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// const root = new TreeNode(1);
// const l2 = new TreeNode(2);
// const l3 = new TreeNode(3);
// const l4 = new TreeNode(4);
// const l5 = new TreeNode(5);

// root.left = l2;
// root.right = l3;
// l2.left = l4;
// l2.right = l5;

// console.log(rightSideView(root));