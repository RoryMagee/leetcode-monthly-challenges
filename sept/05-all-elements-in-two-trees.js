/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let res = [];
    let curr1 = root1;
    let curr2 = root2;
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        res.push(node.val);
    }
    if (curr1) traverse(curr1);
    if (curr2) traverse(curr2);
    return res.sort((a,b) => a - b);
};
