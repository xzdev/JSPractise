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
var zigzagLevelOrder = function(root) {
        if (!root) return [];
    return zigzagBfs(root);
};

var zigzagBfs = function(root) {
    let queue = [root];
    let result = [];
    let reversed = true;

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
        //console.log(reversed, values);
        result.push(reversed ? values : values.reverse());
        queue = newLevel;
        reversed = !reversed;
    }
    return result;
}