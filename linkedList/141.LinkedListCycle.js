/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 *  
 * https://leetcode.com/problems/linked-list-cycle/description/
 * Given a linked list, determine if it has a cycle in it.
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false;
    }
    var firstPointer = head;
    var secondPointer = head.next;

    while (firstPointer !== secondPointer) {
        if (secondPointer === null || secondPointer.next === null) {
            return false;
        }
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next.next;
    }
    return true;
};