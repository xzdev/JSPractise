/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[][]}
 */

function isNext(a, b) {
    var diffCount = 0;
    a.split('').forEach((v, i) => {
        if (b[i] !== v) {
            diffCount++;
        }
    });
    return diffCount === 1;
}

function nextMap(wordList) {
    var next = {};
    var arr = [...wordList];
    var i, j, len = arr.length;
    for (i = 0; i < len; i++) {
        var w = arr[i];
        if (!next[w]) {
            next[w] = new Set();
        }

        for (j = i+1; j < len; j++) {
            var x = arr[j];
            if (!next[x]) {
                next[x] = new Set();
            }
            if (isNext(w, x)) {
                next[w].add(x);
                next[x].add(w);
            }
        }
    }
    return next;
}

var findLadders = function(beginWord, endWord, wordList) {
    if (!beginWord || !endWord) {
        return [[]];
    }

    var next = nextMap(new Set([...wordList, endWord]));
    next[beginWord] = new Set([...wordList].filter((v) => {
        return isNext(beginWord, v);
    }));

    var currentStop = new Set([beginWord]);
    var path = {};
    path[beginWord] =[[beginWord]];
    var visited;
    var result = [];

    // console.log(next);

    while(result.length == 0) {
        visited = currentStop;
        for (var v of currentStop) {
            // console.log('check', v, ' and next', next[v]);
            for(var w of next[v]) {
                if (!visited.has(w)) {
                    path[w] = (path[w] || []);
                    path[v].forEach((p)=>{
                        path[w].push(p.concat(w));
                    });

                    if (w === endWord) {
                        result = path[w];
                    }
                }
            }
        }
        if (result.length > 0) {
            break;
        }

        // console.log(path, visited);

        var newStop = new Set();
        for (var x of currentStop) {
            for (var y of next[x]) {
                if (!visited.has(y)) {
                    newStop.add(y);
                }
            }
        }
        currentStop = newStop;
        // console.log(result, currentStop);
    }

    // console.log(result);
    return result;
};

console.log(findLadders('hit', 'cog', new Set(["hot","dot","dog","lot","log"])));