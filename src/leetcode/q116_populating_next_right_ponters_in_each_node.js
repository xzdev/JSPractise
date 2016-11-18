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

    travel(root);
};

var travel = (node) => {
    if (!node || !node.left) {
        return ;
    }

    node.left.next = node.right;
    if (node.next) {
        node.right.next = node.next.left;
    }
    travel(node.left);
    travel(node.right);
}

//            1
//          2 -> 3
//     4 -> 5 ->   6  7
// 8->9 10->11 12->13 14 -> 15


