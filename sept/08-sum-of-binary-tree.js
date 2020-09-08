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
var sumRootToLeaf = function(root) {
    let current = root;
    let binArr = [];
    let startArr = [];
    function traverse(node, binary, sum) {
        if (!node.left && !node.right) {
            console.log(parseInt(binary, 2));
            return sum + parseInt(binary, 2);
        }
        if (node.left) {
            sum = traverse(node.left, binary + node.left.val.toString(), sum);
        }
        if (node.right) {
            sum = traverse(node.right, binary + node.right.val.toString(), sum);
        }
        return sum;
    }
    return traverse(current, root.val.toString(), 0);
};
