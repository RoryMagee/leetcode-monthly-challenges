/**
 * definition for a binary tree node.
 * function treenode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {treenode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (root === null) return 0;
    let total = 0;
    let curr = root;
    const traverse = function(node) {
        if (node.left && !node.left?.left && !node?.left?.right) {
            total += node.left.val;
        }
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(curr);
    return total;
};
