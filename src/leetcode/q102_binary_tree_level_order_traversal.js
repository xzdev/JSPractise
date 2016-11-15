/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [[]];
    return bfs(root);
};

var bfs = function(root) {
    let queue = [root];
    let result = [];

    while(queue.length > 0) {
        let newLevel = [];
        let values = [];

        queue.forEach((v) => {
            values.push(v.val);
            if (v.left) {
                newLevel.push(v.left);
            }
            if (v.right) {
                newLevel.push(v.right);
            }
        });

        result.push(values);
        queue = newLevel;
    }
    return result;
}