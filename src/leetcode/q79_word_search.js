/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (!word || word.length === 0) {
        return true;
    }
    let values = [];
    board.forEach((row, i)=> row.forEach((cell, j) => {
        if (cell === word[0]) {
            values.push({i, j});
        }
    }));
    return values.some(({i, j}) => findPath(board, word, {i, j}, 0));
};

var findPath = function(board, word, {i, j}, k) {

    if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1 || board[i][j] !== word[k]) {
        return false;
    }

    if (k === word.length - 1) {
        return true;
    }

    board[i][j] = board[i][j].charCodeAt(0) ^ 256;
    let result = findPath(board, word, {i:i + 1, j}, k+1) || findPath(board, word, {i: i - 1, j}, k + 1) || findPath(board, word, {i, j: j+1}, k + 1) || findPath(board, word, {i, j: j -1}, k + 1);
    board[i][j] = String.fromCharCode( board[i][j] ^ 256);
    return result;
}

var board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
console.log(exist(board, "ABCCED"));
console.log(exist(board, "SEE"));
console.log(exist(board, "ABCB"));

// var board = [
//   ['A','B','C','E'],
//   ['S','F','E','S'],
//   ['A','D','E','E']
// ];
// console.log(exist(board, "ABCESEEEFS"));


// var board = [['C','A', 'A','A','A','A','B','C','D']];
// console.log(exist(board, "AAB"));
