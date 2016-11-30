/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let fivePower = 5;
    let v = 0;
    while(n > 0) {
        n = Math.floor(n / 5);
        fivePower *= 5;
        v += n;
    }
    return v;
};

console.log(trailingZeroes(15));