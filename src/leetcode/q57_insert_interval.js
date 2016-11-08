/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    if (!intervals || intervals.length === 0) {
        return [newInterval];
    }

    let result = [];
    let newIntervalInserted = false;
    let intervalsLen = intervals.length - 1;
    let overlapping = new Interval(Infinity, -Infinity);
    let lastInterval;
    intervals.forEach((v, i) => {
        if (overlaps(v, newInterval)) {
            if (!newIntervalInserted) {
                result.push(overlapping);
                newIntervalInserted = true;
            }
            overlapping.start = Math.min(overlapping.start, v.start, newInterval.start);
            overlapping.end = Math.max(overlapping.end, v.end, newInterval.end);
            lastInterval = v;
        } else if (i === 0 && newInterval.end < v.start) {
            result.push(newInterval);
            result.push(v);
            newIntervalInserted = true;
            lastInterval = v;
        } else if (!newIntervalInserted && i === intervalsLen) {
            if (newInterval.start > v.end) {
                result.push(v);
                result.push(newInterval);
            } else {
                result.push(newInterval);
                result.push(v);
            }
        } else if (!newIntervalInserted && v.start > newInterval.end && lastInterval.end < newInterval.start) {
            result.push(newInterval);
            result.push(v);
            newIntervalInserted = true;
        } else {
            result.push(v);
            lastInterval = v;
        }
    })

    return result;
};

function overlaps(first, second) {
    if ( first.end < second.start || first.start > second.end) {
        return false;
    } else {
        return true;
    }
}

function Interval(start, end) {
    this.start = start;
    this.end = end;
}

var intervals = [[1,5], [9, 12]].map((v) => {
    return new Interval(v[0], v[1]);
});

console.log(insert(intervals, new Interval(6, 8)));