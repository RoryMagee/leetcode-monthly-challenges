/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let count = 0;
    let current = root;
    let stack = [];
    let total = 0;
    if (current === null) return 0;
    
    const traverse = function(node) {
        stack.push(node);
        if (node.right) traverse(node.right);
        if (node.left) traverse(node.left);
    }
    
    traverse(current);
    
    const calcTotal = function(node) {
        total += node.val;
        if (total === sum) count++;
        if (node.left) calcTotal(node.left);
        if (node.right) calcTotal(node.right);
        total = total - node.val;;
    }
    stack.forEach(n => {
        calcTotal(n);
    })
    return count;
};

