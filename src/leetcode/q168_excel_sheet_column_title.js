/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let charCodeA = 'A'.charAt(0);
    let result = String.fromCharCode((n % 26) + 1 + charCodeA);


    return result;
};

console.log(convertToTitle(2));