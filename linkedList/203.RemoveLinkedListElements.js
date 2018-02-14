/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 * Remove all elements from a linked list of integers that have value val.
 */
var removeElements = function(head, val) {
    if (head === null) {
        return null;
    }
    head.next = removeElements(head.next, val);
    if (head.val === val) {
        return head.next;
    }
    return head;
};