/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let minHPTable = [];
    let yLen = dungeon.length;
    let xLen = dungeon[0].length;

    // create same dimension array
    dungeon.forEach(() => minHPTable.push([]));
    for (let j = yLen - 1; j >= 0; j--) {
        for (let i = xLen - 1; i >= 0; i--) {
            // start from bottom right to calculate the minimum health to the top left
            let curValue = dungeon[j][i];
            let down = j < yLen - 1 && minHPTable[j + 1][i];
            let right = i < xLen - 1 && minHPTable[j][i + 1];

            if (down !== false && right !== false) {
                minHPTable[j][i] = Math.max(1, Math.min(down, right) - curValue);
            } else if (down !== false) {
                minHPTable[j][i] = Math.max(1, down - curValue);
            } else if (right !== false) {
                minHPTable[j][i] = Math.max(1, right - curValue);
            } else {
                minHPTable[j][i] = Math.abs(Math.min(0, curValue)) + 1;
            }
        }
    }
    return minHPTable[0][0];
};

//console.log(calculateMinimumHP([[-2, -3, 3],[-5, -10, 1],[10, 30, -5]]));
//console.log(calculateMinimumHP([[0,0]]));
//console.log(calculateMinimumHP([[0,0],[-5,-4]]));
// console.log(calculateMinimumHP([[0,0,0],[1,1,-1]]));
// console.log(calculateMinimumHP([[1,-3,3],[0,-2,0],[-3,-3,-3]]));