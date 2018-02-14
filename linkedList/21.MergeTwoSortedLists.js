/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 * Merge two sorted linked lists and return it as a new list. 
 * The new list should be made by splicing together the nodes of the first two lists.
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    var l3;
    if (l1.val < l2.val) {
        l3 = l1;
        l1.next = mergeTwoLists(l1.next, cl2);
    } else {
        l3 = l2;
        l2.next = mergeTwoLists(l1, l2.next);
    }
    return l3;
};
