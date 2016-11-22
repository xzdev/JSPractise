/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    if (!str) {
        return str || '';
    }
    
    return reverseStr(str.trim().replace(/\s+/g, ' ')).split(' ').map(reverseStr).join(' ');
};

var reverseStr = (v) => {
    if (!v || v.length < 2) {
        return v;
    }
    let newStr = [];
    for (let i = v.length - 1; i >= 0; i--) {
        newStr.push(v[i]);
    }
    return newStr.join('');
};

// console.log(reverseWords("e d c  b   a") + 'xxx');