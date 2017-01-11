/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    // bounary case
    if (!s || s.length <= 10) {
        return [];
    }

    const arr = [];
    const map = {};
    for (let i = 0, len = s.length; i <= len - 10; i++) {
        const substr = s.substr(i, 10);
        const value = map[substr] || 0;
        map[substr] = value + 1;
    }

    for (let key in map) {
        if (map[key] > 1) {
            arr.push(key);
        }
    }

    return arr;
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAAA"));