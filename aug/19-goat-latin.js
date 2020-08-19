/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    let arr = S.split(' ');
    const _v = ['a', 'e', 'i', 'o', 'u'];
    let a;
    let res = [];
    arr.forEach((word, idx) => {
        a = '';
        for (let x = 0; x <= idx; x++) {
            a += 'a';
        }
        console.log(a);
        if (_v.indexOf(word.charAt(0).toLowerCase()) !== -1) {
            // Word starts with vowel
            res.push(word + 'ma' + a);
        } else {
            // Word doesn't start with vowel 
            let start = word.substring(0, 1); 
            res.push(word.substring(1) + start + 'ma' + a);
        }
    });
    return res.join(' ');
};
