/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (!triangle || triangle.length === 0) {
        return 0;
    }

    let result = [];
    triangle.forEach((arr) => {
        result = arr.forEach((v, i) => (Math.min(result[i-1] || 0, result[i+1] || 0) + v));
    });
    return Math.min(...result);
};

console.log(minimumTotal([
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]));