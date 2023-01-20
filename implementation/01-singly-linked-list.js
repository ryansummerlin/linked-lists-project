// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here

        // This should be time complexity O(1). No matter how long the list is, you are performing four
        // operations maximum: assign newNode.next to the current head, change the current head to new node,
        // update this.length, and return this.
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!! - fixed
        // Write your hypothesis on the time complexity of this method here

        // Time complexity here should be O(n) - you have to cycle through the entire list during
        // the while loop in order to get to the tail

        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }

        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head

        let oldHead = this.head;
        if (this.length === 0) {
            return undefined;
        } else {
            this.head = oldHead.next;
        }
        this.length--;
        return oldHead;

        // Write your hypothesis on the time complexity of this method here

        // This should be a O(1) time complexity. Regardless of how long the list is,
        // you just set the new head to the "next" property of the first node in the linked list,
        // adjust the length, and return the original head
    }

    removeFromTail() {
        // Remove node at tail

        let oldTail;
        if (this.length === 0) {
            return undefined;
        } else if (this.length === 1) {
            oldTail = this.head;
            this.head = null;
        } else {
            let curr = this.head;
            while (curr.next.next) {
                curr = curr.next;
            }
            oldTail = curr.next;
            curr.next = null;
        }

        this.length--;
        return oldTail;

        // Write your hypothesis on the time complexity of this method here

        // This should have time complexity O(n), as you have to cycle through the nodes
        // until you get to the second to last pointer
    }

    peekAtHead() {
        // Return value of head node

        if (this.length === 0) {
            return undefined;
        } else {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here

        // This should be time complexity O(n) - no matter how long the list is all you are doing
        // is returning the head (or undefined if length = 0)
    }

    print() {
        // Print out the linked list

        if (this.length > 0) {
            let curr = this.head;
            while (curr) {
                console.log(curr.value);
                curr = curr.next;
            }
        }

        // Write your hypothesis on the time complexity of this method here

        // This should be time complexity O(n). You cycle through every value of the linked list,
        // performing two operations: print the current value, and change the current value to the next
        // node in the list. O(2n) then simplifies to O(n).
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
