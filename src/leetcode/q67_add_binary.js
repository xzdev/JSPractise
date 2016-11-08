/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    if (!a || a.length === 0) return b;
    if (!b || b.length === 0) return a;

    let cOne = '1'.charCodeAt(0);
    let cZero = '0'.charCodeAt(0);

    let carry = 0;
    let aIdx = a.length - 1;
    let bIdx = b.length - 1;
    let result = [];

    while(aIdx >= 0 || bIdx >= 0) {
        if (aIdx >= 0 && bIdx >= 0) {
            let sum = a[aIdx].charCodeAt(0) + b[bIdx].charCodeAt(0) - 2*cZero + carry;
            let {v, c} = getResult(sum);
            carry = c;
            result.push(v);
        } else if (aIdx >= 0) {
            let sum = a[aIdx].charCodeAt(0) - cZero + carry;
            let {v, c} = getResult(sum);
            carry = c;
            result.push(v);
        } else if (bIdx >= 0) {
            let sum = b[bIdx].charCodeAt(0) - cZero + carry;
            let {v, c} = getResult(sum);
            carry = c;
            result.push(v);
        }
        aIdx--;
        bIdx--;
    }

    if (carry > 0) {
        result.push('1');
    }

    result = result.reverse();
    return result.join('');
};

function getResult(v) {
    if (v >= 2) {
        return {
            v: v % 2 === 0 ? '0' : '1',
            c: 1
        };
    } else {
        return {
            v: v === 0 ? '0' : '1',
            c: 0
        };
    }
}

console.log('sum', addBinary('1', '1'));