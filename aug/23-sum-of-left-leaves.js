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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let total = 0;
    let curr = root;
    const traverse = function(node) {
        if (node.left) {
            total += node.left.val;
            traverse(node.left)
        }
        if (node.right) traverse(node.right);
    }
    if (root === null) return 0;
    traverse(curr);
    return total;
};
