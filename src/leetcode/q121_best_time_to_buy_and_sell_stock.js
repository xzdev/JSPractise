/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;

    if (!prices || prices.length === 0) {
        return result;
    }

    let minv = prices[0];

    prices.forEach((v) => {
        if (v < minv) {
            minv = v;
        } else if (v - minv > result) {
            result = v - minv;
        }
    });

    return result;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));