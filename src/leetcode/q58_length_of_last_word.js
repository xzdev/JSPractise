/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s || s.length === 0) {
        return 0;
    }

    let wlen = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            wlen++;
        } else if (s[i] == ' ' && wlen === 0) {
            continue;
        } else {
            break;
        }
    }
    return wlen;
};

console.log(lengthOfLastWord('Hello word!'));
console.log(lengthOfLastWord('abc  '));