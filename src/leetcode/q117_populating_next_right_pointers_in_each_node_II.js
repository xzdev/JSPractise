/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) {
        return ;
    }

    let left = findRightNode(root.left);
    let right = findLeftNode(root.right);
    if (left) {
        left.next = right;
    }

    connect(root.left);
    connect(root.right);  
};

var findRightNode = (node) => {
    return node && (node.right || node.left);
};
var findLeftNode = (node) => {
    return node && (node.left || node.right);
};

function TreeLinkNode(val) {
    this.val = val;
    this.left = this.right = this.next = null;
}

var root = new TreeLinkNode(6);
var l1 = new TreeLinkNode(4);
var r1 = new TreeLinkNode(8);
var l2 = new TreeLinkNode(1);
var l3 = new TreeLinkNode(5);
var r2 = new TreeLinkNode(10);

root.left = l1;
root.right = r1;
l1.left = l2;
l1.right = l3;
r1.right = r2;

connect(root); 