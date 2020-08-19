/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    const _map = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1
    }
    let res = S.split(' ').map((word, idx) => {
        let a = '';
        for (let x = 0; x <= idx; x++) {
            a += 'a';
        }
        let char = word[0];
        if (_map[char.toLowerCase()]) {
            return word + 'ma' + a;
        } else {
            return word.substring(1) + char + 'ma' + a;
        }
    });
    return res.join(' ');
};
