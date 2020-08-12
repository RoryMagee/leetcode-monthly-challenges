/**
 *Given a binary tree, find its maximum depth.
 *
 *The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 *Note: A leaf is a node with no children.
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
var maxDepth = function(root) {
    if (root === null) return 0;
    let current = root;
    let maxDepth = 1;
    let currentDepth = 1;
    function traverse(node) {
        if (currentDepth > maxDepth) maxDepth = currentDepth;
        if (node?.left) {
            currentDepth++;
            traverse(node.left); 
            currentDepth--;
        }
        if (node?.right) {
            currentDepth++;
            traverse(node.right);
            currentDepth--;
        }
    }
    traverse(current);
    return maxDepth;
};
