/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let value = 0;
    if (!prices && prices.length === 0) {
        return value;
    }

    let min = prices[0];
    let max = prices[0];
    for (let i = 0, len = prices.length; i < len; i++) {
        if (prices[i+1] !== undefined) {
            if (prices[i+1] > prices[i]) {
                max = prices[i+1];
            } else if (prices[i+1] < prices[i]) {
                value += max - min;
                max = min = prices[i+1];
            }
        }
    }
    return value + max - min;
};

// console.log(maxProfit([6,1,2,5,2,7,4]));
console.log(maxProfit([]));