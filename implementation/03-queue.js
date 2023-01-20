const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        const newNode = new SinglyLinkedNode(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;

        // Write your hypothesis on the time complexity of this method here

        // This should be time complexity O(1) - since the Queue class has a tail attribute,
        // all you have to do is set the pointer for the existing tail to the new node, and make the new
        // node the tail. This will take the same amount of steps regardless of how long the queue is.
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        let oldHead = this.head;
        if (this.length === 0) {
            return null;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
        }

        this.length--;
        return oldHead.value;

        // Write your hypothesis on the time complexity of this method here

        // This is O(1) as well and passed test 04 to test for O(1) time complexity.
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
