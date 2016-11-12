/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {

    let nodesToSwap = [];
    traversal(root, [], nodesToSwap);

    let v = nodesToSwap[0].val;
    nodesToSwap[0].val = nodesToSwap[1].val;
    nodesToSwap[1].val = v;

    // console.log(nodesToSwap);
    return;
};

var traversal = function(root, lastVisited, nodesToSwap) {
    if (!root) return;
    traversal(root.left, lastVisited, nodesToSwap);
    if (lastVisited.length === 2) {
        mergeCandidate(lastVisited, nodesToSwap);
    }
    lastVisited.push(root);
    traversal(root.right, lastVisited, nodesToSwap);
    if (lastVisited.length === 2) {
        mergeCandidate(lastVisited, nodesToSwap);
    }
};

// If the visited node 1 > visted node 2, then node 1 is in a wrong position, it needs to be swapper out.
// We move the two item both into the nodesToSwap in this case. If the nodesToSwap already has two items, then
// that means the next one to push in contains the node to swap
var mergeCandidate = function(visited, nodesToSwap) {
    if (visited[0].val > visited[1].val) {
        if (nodesToSwap.length === 0) {
            nodesToSwap[0] = visited[0];
            nodesToSwap[1] = visited[1];
        } else {
            nodesToSwap[1] = visited[1];
        }
        // keep the smaller value
        visited[0] = visited[1];
    }
    visited.splice(0, 1);
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var root = new TreeNode(9);
var left1 = new TreeNode(12);
var right1 = new TreeNode(10);
var left21 = new TreeNode(1);
var left22 = new TreeNode(5);
var right22 = new TreeNode(4);

root.left = left1;
left1.left = left21;
left1.right = left22;
root.right = right1;
right1.right = right22;

console.log(recoverTree(root));

//   9
//  4  10
// 1 5    12
// => 1 4 5 9 10 12
//    5
//  4   10
// 1  9    12
// => 1 4 9 5 10 12
//    10
//  4   9
// 1  5    12
// => 1 4 5 10 9 12
//    9
//  4   10
// 12  5    1
// => 12 4 5 9 10 1
//    9
//  4   5
// 1  10   12
// => 1 4 10 9 5 12  
