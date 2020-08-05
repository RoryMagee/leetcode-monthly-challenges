/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.prevSearches = {};
    this.values = [];   
};

/** Adds a word into the data structure.  @param {string} word @return {void} */ WordDictionary.prototype.addWord = function(word) {
    if (this.values.indexOf(word) === -1) this.values.push(word);
    this.prevSearches = new Set(); 
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if (this.prevSearches.hasOwnProperty([word])) {
        return this.prevSearches[word];
    } else {
        let searchTermLength = word.length;
        let searchArr = this.values.filter(item => item.length === searchTermLength);
        if (searchArr.length === 0) {
            if (this.prevSearches.hasOwnProperty(word) === false) {
                this.prevSearches[word] = false;
            }
            return false;
        }
        if (word.indexOf('.') === -1) {
            if (searchArr.indexOf(word) !== -1) {
                this.prevSearches[word] = true;
                return true;
            }
            if (this.prevSearches.hasOwnProperty(word) === false) {
                this.prevSearches[word] = false;
            }
            return false;
        }
        let reg = new RegExp(`\\b${word}\\b`);
        for (let x = 0; x < searchArr.length; x++) {
            if (reg.test(searchArr[x]) === true) {
                this.prevSearches[word] = true;
                return true;
            }
        }
        if (this.prevSearches.hasOwnProperty(word) === false) {
            this.prevSearches[word] = false;
        }
        return false;
    }
}
/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let obj = new WordDictionary();
obj.addWord("at");
obj.addWord("and");
obj.addWord("an");
console.log(obj.search("a.d"));
console.log(obj.search("a."));
console.log(obj.search("a."));
console.log(obj.search("a.d"));
