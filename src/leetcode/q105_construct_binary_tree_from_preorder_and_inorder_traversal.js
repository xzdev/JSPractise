/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    return buildTreeHelper(preorder, 0, inorder, 0, preorder.length);
};

var buildTreeHelper = function(preorder, startPre, inorder, startIn, length) {
    if (length === 0) {
        return null;
    }

    let rootValue = preorder[startPre];
    let root = new TreeNode(rootValue);
    //console.log('input', preorder.slice(startPre, startPre + length), inorder.slice(startIn, startIn + length), length);
    if (length === 1) {
        return root;
    }

    let leftTreeNodeCount = inorder.indexOf(rootValue);
    root.left = buildTreeHelper(preorder, startPre + 1, inorder, startIn, leftTreeNodeCount - startIn);
    root.right = buildTreeHelper(preorder, leftTreeNodeCount + 1 + startPre - startIn, inorder, leftTreeNodeCount + 1, length - leftTreeNodeCount + startIn - 1);

    return root;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(buildTree([6, 3, 1, 4, 10, 7, 8, 12, 13], [1, 3, 4, 6, 7, 8, 10, 12, 13]));


//         6
//      3     10
//   1    4  7   12
//             8    13
// preOrder: [6, 3, 1, 4, 10, 7, 8, 12, 13]
// inOrder:  [1, 3, 4, 6, 7, 8, 10, 12, 13]