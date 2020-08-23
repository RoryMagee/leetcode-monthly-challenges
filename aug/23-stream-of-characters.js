var StreamChecker = function(words) {
    this.trie = null;
    this.words = words;
    this.build(this.words);
    this.currentQuery = '';
};

StreamChecker.prototype.build = function(words) {
    this.trie = new Node({}, false);
    words.forEach(word => {
        let current = this.trie;
        word = word.split('').reverse().join('');
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new Node({}, false);
            }
            current = current.children[char];
        }
        current.isWord = true;
    });
}

/** 
 * @param {character} letter
 * @return {boolean}
 */

StreamChecker.prototype.query = function(letter) {
    this.currentQuery += letter;
    let current = this.trie;
    for (let i = this.currentQuery.length-1; i >= 0 && current !== undefined; i--) {
        current = current.children[this.currentQuery.charAt(i)];
        if (current?.isWord) return true;
    }
    return false;
};

class Node {
    constructor(children, isWord) {
        this.children = children;
        this.isWord = isWord;
    }
}

