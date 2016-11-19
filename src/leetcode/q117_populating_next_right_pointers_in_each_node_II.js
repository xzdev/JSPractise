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

    let leftNode = new TreeLinkNode(0);
    let node = root;
    let travelNode = leftNode;
    while(node) {
        if (node.left) {
            travelNode.next = node.left;
            travelNode = travelNode.next;
        }
        if (node.right) {
            travelNode.next = node.right;
            travelNode = travelNode.next;
        }
        node = node.next;
        if (!node) {
            travelNode = leftNode;
            node = leftNode.next;
            leftNode.next = null;
        }
    }

};