/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function getStackedPath(root) {
    if (!root) {
        return [];
    }

    let node = root;
    let path = [node];
    while(node) {
        if (node.left) {
            path.push(node.left);
            node = node.left
        } else {
            node = null;
        }
    }
    return path;
}
/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.stack = getStackedPath(root);
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    const value = this.stack.pop();
    if (value.right) {
        this.stack = this.stack.concat(getStackedPath(value.right));
    }
    return value.val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/