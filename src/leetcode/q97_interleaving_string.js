/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var dpTable;
var isInterleave = function(s1, s2, s3) {
    const s1Len = s1.length;
    const s2Len = s2.length;
    const s3Len = s3.length;
    if (s3Len === 0 && s1Len === 0 && s2Len === 0) {
        return true;
    }
    if (s3Len !== s1Len + s2Len) {
        return false;
    }
    if (s1Len === 0) {
        return s2 === s3;
    }
    if (s2Len === 0) {
        return s1 === s3;
    }

    dpTable = [[]];
    for (let i = 0; i <= s1Len; i++) {
        dpTable[i] = [];
        for (let j = 0; j <= s2Len; j++) {
            dpTable[i][j] = false;
            interleaveStr(s1, i, s2, j, s3);
        }
    }
    return dpTable[s1Len][s2Len];
};

// Notice: it is confusing about the indexes if you don't know what's going on
// if s2 is "ab", then dpTable contains [["", "a", "ab"]]. So the length of it is lenth + 1
// when looking the string elements, need to use - 1 to properly locate the item

var interleaveStr = function(s1, i, s2, j, s3) {
    if (i === 0) {
        dpTable[i][j] = s2.slice(0, j) === s3.slice(0, j);
    } else if (j === 0) {
        dpTable[i][j] = s1.slice(0, i) === s3.slice(0, i);
    } else {
        dpTable[i][j] = (dpTable[i -1][j] && s1[i-1] === s3[i + j -1]) || (dpTable[i][j - 1] && s2[j-1] === s3[i + j - 1]);
    }
}

// console.log(isInterleave("ab", "bc", "babc"));
// console.log(dpTable);
// console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
// console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));
// console.log(isInterleave("baababbabbababbaaababbbbbbbbbbbaabaabaaaabaaabbaaabaaaababaabaaabaabbbbaabbaabaabbbbabbbababbaaaabab", "aababaaabbbababababaabbbababaababbababbbbabbbbbababbbabaaaaabaaabbabbaaabbababbaaaababaababbbbabbbbb", "babbabbabbababbaaababbbbaababbaabbbbabbbbbaaabbabaababaabaaabaabbbaaaabbabbaaaaabbabbaabaaaabbbbababbbababbabaabababbababaaaaaabbababaaabbaabbbbaaaaabbbaaabbbabbbbaaabaababbaabababbbbababbaaabbbabbbab"))
// console.log(isInterleave("bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa", "babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab", "babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab"))

//"aabcc"
//"dbbca"
//"aadbbcbcac"
//"aadbbbaccc"
//
//"baababbabbababbaaababbbbbbbbbbbaabaabaaaabaaabbaaabaaaababaabaaabaabbbbaabbaabaabbbbabbbababbaaaabab"
//"aababaaabbbababababaabbbababaababbababbbbabbbbbababbbabaaaaabaaabbabbaaabbababbaaaababaababbbbabbbbb"
//"babbabbabbababbaaababbbbaababbaabbbbabbbbbaaabbabaababaabaaabaabbbaaaabbabbaaaaabbabbaabaaaabbbbababbbababbabaabababbababaaaaaabbababaaabbaabbbbaaaaabbbaaabbbabbbbaaabaababbaabababbbbababbaaabbbabbbab"
//
//"bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa"
//"babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab"
//"babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab"