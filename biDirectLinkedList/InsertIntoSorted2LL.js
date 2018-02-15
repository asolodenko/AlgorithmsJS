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
    let insertNode = new Node(data);
    if (head === null) {
        return insertNode;
    } 
    let currentNode = head;
    if (insertNode.data < currentNode.data) {
        insertNode.next = currentNode;
        currentNode.prev = insertNode;
        head = insertNode;
        return head;
    } else {
        while (currentNode.data < insertNode.data) {
            if (currentNode.next === null) {
                currentNode.next = insertNode;
                insertNode.prev = currentNode;
                return head;
            } else {
                currentNode = currentNode.next;
            }
        }
        currentNode.prev.next = insertNode;
        insertNode.prev = currentNode.prev;
        currentNode.prev = insertNode;
        insertNode.next = currentNode;
        return head;
    }
};
