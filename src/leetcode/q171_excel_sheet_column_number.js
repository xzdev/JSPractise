/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let charACode = 'A'.charCodeAt(0);
    return s.split().reduce((a, c) => {
        let v = c.charCodeAt(0) - charACode + 1;
        return a*26 + v;
    }, 0);
};

console.log(titleToNumber('AA'));