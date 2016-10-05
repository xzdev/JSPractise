/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return /^\s*(-|\+)?(\d+(\.?(\d+)?(e(-|\+)?\d+)?)?|\.\d+(e(-|\+)?\d+)?)\s*$/.test(s);
};