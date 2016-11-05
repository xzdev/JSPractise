/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) return [''];
    if (n === 1) return ['()'];

    var result = [];
    for(let i = 0; i < n; i++) {
        let partial = generateParenthesis(i).map((v) => {
            return '(' + v + ')';
        });

        let complete = [];
        generateParenthesis(n - i - 1).map((v)=>{
            complete = [...complete, ...partial.map((s) => s + v)];
        });

        result = [...result, ...complete];
    }

    return result;
};