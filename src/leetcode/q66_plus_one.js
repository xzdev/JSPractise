/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    for(let len = digits.length, i = len - 1; i >= 0; i--) {
        let value = digits[i] + carry;
        if (value >= 10) {
            digits[i] = value % 10;
            carry = 1;
        } else {
            digits[i] = value;
            carry = 0;
        }
    }
    if (carry > 0) {
        return [1].concat(digits);
    }
    return digits;
};

console.log(plusOne([1,9,9]));