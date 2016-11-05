/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let p = [], stack = [];
    let j = 0;
    if (!s || s.length === 0) {
        return 0;
    }

    for(let i = 0, len = s.length; i < len; i++) {
        p[i] = 1;
        // use two pointers to set 0 once the parenthesis matches
        if (s[i] === ')') {
            if (stack.length > 0 && stack[stack.length -1].c === '(') {
                //a matched ()
                stack.pop();
                p[i] = 0;
                p[j] = 0;

                // move j to last 1
                j = stack.length > 0 ? stack[stack.length -1].i : 0;

                // skip the remaining logic
                continue;
            }
        }
        // else not a match
        stack.push({c: s[i], i});
        j = i;
    }

    //then count the max consecutive 0s in the array p
    return countConsecutiveZeros(p);
};

/**
 * Returns the count of maximum consecutive 0s in the array
 * @param  {array} arr The array with 0 or 1
 * @return {number}     The maximum count of consecutive 0s
 */
function countConsecutiveZeros(arr) {
    let maxZeros = 0;
    let consecZeros = 0;

    arr.forEach((v) => {
        if(v === 0) {
            consecZeros++;
        } else {
            consecZeros = 0;
        }

        if (consecZeros > maxZeros) {
            maxZeros = consecZeros;
        }
    });
    return maxZeros;
}

console.log(countConsecutiveZeros([0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1]));
console.log(longestValidParentheses('())(())))())()())'));
console.log(longestValidParentheses('(()())'));