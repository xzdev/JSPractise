/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    const newIntervals = intervals.sort(sortFunc);
    const arr = [];
    newIntervals.forEach((v) => {
        if (arr.length > 0) {
            const top = arr[arr.length -1];
            if (overlap(top, v)) {
                top.start = Math.min(top.start, v.start);
                top.end = Math.max(top.end, v.end);
                return;
            }
        }
        arr.push(v);
    });
    return arr;
};

function overlap(first, second) {
    return !(first.end < second.start || first.start > second.end);
}

function sortFunc(first, second) {
    return first.start - second.start;
}

function Interval(start, end) {
    this.start = start;
    this.end = end;
}

var intervals = [[1,5], [9, 12]].map((v) => {
    return new Interval(v[0], v[1]);
});

console.log(merge(intervals));