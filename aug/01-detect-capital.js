/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const regex = /((\b[A-Z]+\b)|(\b[A-Z][a-z0-9_-]+\b)|(\b[a-z]+\b))/g
    let res = word.match(regex);
    if (res) {
        return true;
    }
    return false;
};
