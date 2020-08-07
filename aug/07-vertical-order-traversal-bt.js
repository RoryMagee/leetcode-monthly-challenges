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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    let current = root;
    let x = 0;
    let y = 0;
    let obj = {};
    let lowestIdx = 0;
    function traverse(node) {
        y++;
        
        if (x < lowestIdx) lowestIdx = x;
        if (obj.hasOwnProperty(x)) {
            if (obj[x][y]) {
               if (node.val > obj[x][y][obj[x][y].length-1]) {
                   obj[x][y].push(node.val);
               } else {
                   obj[x][y].unshift(node.val);
               }
            } else {
                obj[x][y] = new Array();
                obj[x][y].push(node.val);
            }   
        } else {
            obj[x] = new Array();
            obj[x][y] = [node.val];
        }
        
        if (node.left) {
            x--;
            traverse(node.left);
            x++;
        }
        
        if (node.right) {
            x++;
            traverse(node.right);
            x--;
        }
        y--; 
    }
    traverse(current);
    let ret = [];
    console.log(obj);
    while (true) {
        if (obj.hasOwnProperty(lowestIdx.toString())) {
            obj[lowestIdx].forEach((arr) => {
                arr.sort((a,b) => a - b);
            });
            ret.push(obj[lowestIdx].flat());
        } else {
            break;
        }
        lowestIdx++;
    }
    return ret;
};
