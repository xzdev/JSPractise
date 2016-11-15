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
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) {
        return null;
    }
    return buildTreeHelper(inorder, 0, postorder, 0, inorder.length);
};

var buildTreeHelper = function(inorder, startIn, postorder, startPost, length) {
    if (length === 0) {
        return null;
    }

    let rootValue = postorder[startPost + length - 1];
    let root = new TreeNode(rootValue);
    //console.log('input', postorder.slice(startPost, startPost + length), inorder.slice(startIn, startIn + length), length);
    if (length === 1) {
        return root;
    }

    let rootIdx = inorder.indexOf(rootValue);
    let leftTreeSize = rootIdx - startIn;
    root.left = buildTreeHelper(inorder, startIn, postorder, startPost, leftTreeSize);
    root.right = buildTreeHelper(inorder, rootIdx + 1, postorder, startPost + leftTreeSize, length - leftTreeSize - 1);

    return root;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(buildTree([1, 3, 4, 6, 7, 10, 8, 12, 13], [1, 4, 3, 7, 8, 13, 12, 10, 6]));


//         6
//      3     10
//   1    4  7   12
//             8    13
// inOrder:  [1, 3, 4, 6, 7, 10, 8, 12, 13]
// postOrder: [1, 4, 3, 7, 8, 13, 12, 10, 6]