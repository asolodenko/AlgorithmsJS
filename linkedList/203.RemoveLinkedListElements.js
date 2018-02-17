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
 * via while loop
 */
var removeElements = function(head, val) {
    if (head === null) {
        return null;
    }
    let current = head;
    let insteadOfHead = new ListNode();
    let previous = insteadOfHead;
    insteadOfHead.next = head;
    while (current !== null) {
        if (current.val === val) {
            previous.next = current.next;
        } else {
            previous = previous.next;
        }
        current = current.next;
    }
    return insteadOfHead.next;
};