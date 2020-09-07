/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let patternArr = pattern.split('');
    let obj = {};
    let strArr = str.split(' ');
    if (patternArr.length !== strArr.length) return false;
    for(let i = 0; i < strArr.length; i++) {
        if (obj[patternArr[i]]) {
            if (obj[patternArr[i]] === strArr[i]) {
                continue;
            } else {
                return false;
            }
        } else {
            //need to add a check that current strArr[i] hasn't already been assigned
            for (let key in obj) {
                if (obj[key] === strArr[i]) return false;
            }
            obj[patternArr[i]] = strArr[i];
            //obj[a] = dog
        }
    }
    return true;
};
