/**
 * @param {number} n
 * @return {number}
 */
let climbCounts = [];
var climbStairs = function(n) {
    if (n === 1) {
        climbCounts[0] = 1;
        return 1;
    } else if (n === 2) {
        climbCounts[1] = 2;
        return 2;
    } if (climbCounts[n-1]) {
        return climbCounts[n-1];
    } else {
        climbCounts[n-1] = climbStairs(n-1) + climbStairs(n-2) ;
        return climbCounts[n-1];
    }
};

console.log(climbStairs(1), climbStairs(2), climbStairs(3), climbStairs(4), climbStairs(5));

[1,1,1,1,1]
[1,1,1,2]
[1,2,1,1]
[2,1,1,1]
[1,2,2]
[1,2,1]
[2,2,1]

[1,1,1,1]
[1,1,2]
[1,2,1]
[2,1,1]
[2,2]

[1,1,1]
[1,2]
[2,1]

