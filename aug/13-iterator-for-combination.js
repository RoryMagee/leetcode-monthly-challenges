/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.comb = [];
    for (let i = 0; i <= characters.length-combinationLength; i++) {
        let c = [characters.charAt(i)];
        this.prepareComb(characters, combinationLength, c, i, 1);
    }    
    console.log(this.comb);
}; 

CombinationIterator.prototype.prepareComb = function(characters, combinationLength, c, length, index) {
    if (index === combinationLength) {
        let tempStr = c.reduce((acc, curr) => acc + curr);
        this.comb.push(tempStr);
    } else {
        for (let i = length + 1; i < characters.length; i++) {
            c[index] = characters.charAt(i);
            this.prepareComb(characters, combinationLength, c, i, index+1);
            c[index] = '\0';
        }
    }
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    if (this.hasNext()) {
        return this.comb.shift();;
    }
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    if (this.comb.length > 0) return true;
    return false;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
