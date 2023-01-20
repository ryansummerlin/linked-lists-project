// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // This should be time complexity O(1) - you only have to access the head no matter
        // how long the list is.

        // Add node of val to head of linked list
        const newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        const newNode  = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here

        // This should also be time complexity O(1) - because the doubly linked list has
        // a tail variable, you can go straight to the tail without traversing the entire linked list
    }

    removeFromHead() {
        // Remove node at head

        let oldHead = this.head;
        if (this.length === 0) {
            return undefined;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
        }

        this.length--;
        return oldHead.value;

        // Write your hypothesis on the time complexity of this method here

        // This should be time comlexity O(1). No matter how long the list is, you are only adjusting
        // the first and second nodes.
    }

    removeFromTail() {
        // Remove node at tail

        let oldTail = this.tail;
        if (this.length === 0) {
            return undefined;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
        }

        this.length--;
        return oldTail.value;

        // Write your hypothesis on the time complexity of this method here

        // This should be time complexity O(1). With the doubly linked list having a tail attribute,
        // the code is almost exactly the same as for the removeFromHead function.
    }

    peekAtHead() {
        // Return value of head node

        if (this.length > 0) {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here

        // Time complexity O(1).
    }

    peekAtTail() {
        // Return value of tail node

        if (this.length > 0) {
            return this.tail.value;
        }

        // Write your hypothesis on the time complexity of this method here

        // Time complexity O(1) - same as peekAtHead.
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
