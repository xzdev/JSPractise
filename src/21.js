/**
 * Created by xzdev on 11/9/14.
 */

(function(){

    function getSubArrExcept(arr, i) {
        if(i < 0 || i === arr.length) {
            return arr;
        }
        return arr.slice(0, i).concat(arr.slice(i+1, arr.length));
    }

    function getValue(arr, value) {
        var c = [],
            subArr = [],
            v,
            i,
            res,
            len;
        if(arr.length === 2) {
            if(arr[0] + arr[1] === value) {
                return [arr[0], '+', arr[1]];
            } else if(arr[0] - arr[1] === value) {
                return [arr[0], '-', arr[1]];
            } else if(arr[1] - arr[0] === value) {
                return [arr[1], '+', arr[0]];
            } else if(arr[0] * arr[1] === value) {
                return [arr[0], '*', arr[1]];
            } else if(arr[0] / arr[1] === value) {
                return [arr[0], '/', arr[1]];
            } else if(arr[1] / arr[0] === value) {
                return [arr[1], '/', arr[0]];
            }
        } else {
            // option 1: ((a op b) op c) op d)
            for(i = 0, len = arr.length; i < len; i++) {
                v = arr[i];
                subArr = getSubArrExcept(arr, i);
                // v + subarr
                res = getValue(subArr, value - v);
                if(res && res.length > 0) {
                    return res.concat(['+', v]);
                }
                // v - subarr
                res = getValue(subArr, v - value);
                if(res && res.length > 0) {
                    return [v, '-'].concat(res);
                }
                // subarr - v
                res = getValue(subArr, value + v);
                if(res && res.length > 0) {
                    return res.concat(['-', v]);
                }
                // v * subarr
                res = getValue(subArr, value / v);
                if(res && res.length > 0) {
                    return res.concat(['*', v]);
                }
                // v / subarr
                res = getValue(subArr, v /value);
                if(res && res.length > 0) {
                    return [v, '/'].concat(res);
                }
                // subarr / v
                res = getValue(subArr, value * v);
                if(res && res.length > 0) {
                    return res.concat(['/', v]);
                }
            }

            // todo: option 2, (a op b) op (c op d)
        }
        return c;
    }

    function calc21(arr) {
        if(!arr ||arr.length === 0) {
            return ;
        }

        var c = getValue(arr, 24),
            s,
            i,
            len;

        if(!c || c.length === 0) {
            console.log('Cannot find the formula to get the the value');
        } else {
            s = c[0];
            for(i = 1, len = c.length; i < len; i += 2) {
                s = '(' + s + c[i] + c[i+1] + ')';
            }
            console.log(s);
        }
    }

    var test1 = [8,5,3,2];
    calc21(test1);
}());
