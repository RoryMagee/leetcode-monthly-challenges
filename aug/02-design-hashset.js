/**


    
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.values = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (this.values.indexOf(key) === -1) {
        this.values.push(key);
        return this;
    } 
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const idx = this.values.indexOf(key);
    if (idx !== -1) {
        //remove
        this.values.splice(idx,1);
    }      
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if (this.values.indexOf(key) !== -1) return true;
    return false;  
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */


let hs = new MyHashSet();
hs.add(5);
console.log(hs.contains(5));
hs.add(5);
hs.add(7);
hs.add(10000);
hs.remove(4);
hs.remove(5);
console.log(hs.contains(5));
console.log(hs);
