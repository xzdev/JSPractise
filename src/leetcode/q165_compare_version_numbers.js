/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    let result = 0;
    for (let i = 0, len = Math.max(v1.length, v2.length); i < len; i++) {
        let subv1 = parseInt(v1[i] || 0);
        let subv2 = parseInt(v2[i] || 0);
        if (subv1 !== subv2) {
            result = subv1 > subv2 ? 1 : -1;
            break;
        }
        if (result !== 0) {
            break;
        }
    }
    return result;
};

console.log(compareVersion("2.334.3", "2"));