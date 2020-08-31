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
 * @param {number} key
 * @return {TreeNode}
 */
var successor = function(root) {
    if (root === null) return -1;
    if (root.left === null) return root.val;
    return successor(root.left);
}

var searchAndDelete = function(root, key) {
    if (root === null) return null;
}
var deleteNode = function(root, key) {
    if (root === null) return root;
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        if (root.left === null) {
            return root.right;
        }
        if (root.right === null) {
            return root.left;
        }
        root.val = successor(root.right);
        root.right = deleteNode(root.right, root.val);
    }
    return root;
}
