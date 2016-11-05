/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (!matrix || matrix.length <= 1) {
        return ;
    }

    // get dimension
    const dim = matrix.length;
    // flip around the axis \
    for (let j = 0; j < dim; j++) {
        for (let i = 0; i < j; i++) {
            swap(matrix, dim, {i, j}, {x: j, y: i});
        }
    }
    //flip around the axis |
    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < Math.floor(dim/2); j++) {
            swap(matrix, dim, {i, j}, {x: i, y: dim - j - 1});
        }
    }
};

function swap (matrix, dim, {i, j}, {x, y}) {
    //console.log('swap ', i, j, 'with ', x, y);
    matrix[i][j] ^= matrix[x][y];
    matrix[x][y] ^= matrix[i][j];
    matrix[i][j] ^= matrix[x][y];
}
// const arr = [[1,2,3],[4,5,6],[7,8,9]];
// rotate(arr);
// console.log(arr);

// [1,2,3]
// [4,5,6]
// [7,8,9]
// => flip this direction \
// [1,4,7]
// [2,5,8]
// [3,6,9]
//  => flip this direction |
// [7,4,1]
// [8,5,2]
// [9,6,3]

