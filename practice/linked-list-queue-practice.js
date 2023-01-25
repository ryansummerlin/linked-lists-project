// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        // this.length = 0;
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
    }

    addToTail(val) {
        // this.length++;

        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        // O(n) complexity
        let length = 0;
        let curr = this.head;
        while (curr) {
            length++;
            curr = curr.next;
        }

        return length;

        // O(1) complexity: I think the only way to do this would be to add a length attribute
        // to the class. This is going to improve the time complexity because I can pull the length
        // at any point without traversing the whole list but it's also going to increase the space
        // complexity by adding an additional length variable to keep track of

        // return this.length;

    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        let sum = 0;
        let curr = this.head;

        while(curr) {
            sum += curr.value;
            curr = curr.next;
        }

        return sum;

        // Write your hypothesis on the time complexity of this method here

        // Time complexity O(n) - you have to traverse the entire linked list
    }

    averageValue() {
        // Returns the average value of all the nodes

        let sum = 0;
        let num = 0;
        let curr = this.head;

        while (curr) {
            sum += curr.value;
            num += 1;
            curr = curr.next;
        }

        return sum / num;

        // Write your hypothesis on the time complexity of this method here

        // Time complexity O(n) - you have to traverse the entire linked list
        // technically something like O(3n) simplified down to O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        let curr = this.head;
        for (let i = 0; i < n; i++) {
            curr = curr.next;
        }

        return curr;

        // Write your hypothesis on the time complexity of this method here

        // Worst case here is time complexity O(n) and you traverse the whole list
        // because n is the length of the list. Average complexity is O(.5n) which
        // simplifies to O(1).
    }

    findMid() {
        // Returns the middle node

        let length = this.listLength();
        let curr = this.head;

        for (let i = 0; i < ((length / 2) - 1); i++) {
            curr = curr.next;
        }

        return curr;


        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            // I'm not sure this is actually going to vary at all. I'd probably run the same code for
            // a doubly linked list

        // Write your hypothesis on the time complexity of this method here
        // This should be O(n), you have to traverse half the nodes to get to the middle index
        // so the time complexity is going to increase linearly with n length of the list
    }

    reverse() {
        // Returns a new reversed version of the linked list

        let reversed = new SinglyLinkedList();

        let curr = this.head;
        while(curr) {
            reversed.addToHead(curr.value);
            curr = curr.next;
        }

        return reversed;

        // Write your hypothesis on the time complexity of this method here
        // This should be time complexity O(n), you traverse the entire original list
        // and perform an O(1) time complexity operation on each iteration (addToHead)
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let curr = this.head;
        while(curr) {
            this.addToHead(curr.value);
            curr = curr.next;
        }

        let middle = this.findMid();
        middle.next = null;

        // return this;

        // Write your hypothesis on the time complexity of this method here
        // This should be O(n) - you run the while loop then take the middle value
        // and cut it off there
    }
}

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

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        this.length++;

        return this.head;
    }

    findMid() {
        // Returns the middle node

        let curr = this.head;
        let lengthIndex = (this.length / 2) - 1

        for (let i = 0; i < lengthIndex; i++) {
            curr = curr.next;
        }

        return curr;

        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
        // see above. It's the same implementation.
    }

    reverse() {
        // Returns a new reversed version of the linked list

        let reversed = new DoublyLinkedList();

        let curr = this.tail;
        while(curr) {
            reversed.addToTail(curr.value);
            curr = curr.prev;
        }

        return reversed;

        // Write your hypothesis on the time complexity of this method here
        // This should be O(n). The while loop has O(n) time complexity but with
        // the doubly linked list, the addToTail function just has O(1) complexity.
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let curr = this.tail;
        while(curr) {
            this.addToTail(curr.value);
            curr = curr.prev;
        }

        let middle = this.findMid().next;
        middle.prev = null;
        this.head = middle;

        // Write your hypothesis on the time complexity of this method here
        // This should be O(n) - same as the one above basically
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
