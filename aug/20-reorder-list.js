/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let curr = head;
    let arr = [];
    while (curr) {
        arr.push(curr);
        curr = curr.next;
    }
    if (arr.length > 1) { 
        for (let i = 0; i < arr.length / 2; i++) {
            arr[i].next = arr[arr.length-i-1];
            arr[arr.length-i-1].next = arr[i + 1];
            if (i + 1 === Math.floor(arr.length / 2)) {
                if (arr.length % 2 === 0) {
                    arr[i + 1].next = null;
                } else {
                    arr[arr.length - 1 - i] = null;
                }
            }
        }
    }
};
