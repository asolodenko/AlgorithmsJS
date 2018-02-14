/*
    Insert Node in a doubly sorted linked list
    After each insertion, the list should be sorted
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem
    Given a reference to the head of a doubly-linked list and an integer, data, 
    create a new Node object having data value data and insert it into a sorted linked list.
*/

function sortedInsert(head, data) {
    var insertNode = new Node(data);
    if (head === null) {
        head = insertNode;
        return head;
    } 
    var beforeToInsert = head;
    var afterToInsert = head.next;
    if (beforeToInsert.prev === null && insertNode.data < beforeToInsert.data) {
        insertNode.next = beforeToInsert;
        beforeToInsert.prev = insertNode;
        beforeToInsert = insertNode;
        return beforeToInsert;
    }
    while (afterToInsert !== null) {
        if (insertNode.data > beforeToInsert.data && insertNode.data < afterToInsert.data) {
            beforeToInsert.next = insertNode;
            insertNode.prev = beforeToInsert;
            afterToInsert.prev = insertNode;
            insertNode.next = afterToInsert;
            return head;
        }
        afterToInsert = afterToInsert.next;
        beforeToInsert = beforeToInsert.next;
    } 
    beforeToInsert.next = insertNode;
    insertNode = beforeToInsert.prev;
    beforeToInsert = insertNode;
    
    return head;
}