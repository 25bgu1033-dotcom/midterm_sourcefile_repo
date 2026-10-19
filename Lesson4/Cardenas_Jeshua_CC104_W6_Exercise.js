'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  // Internal storage using an array
  constructor() {
    this.items = [];
  }

  // Add an element to the top
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element
  pop() {
    return this.items.pop();
  }

  // Return the top without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // Return true when empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements
  size() {
    return this.items.length;
  }

  // Return all elements as text
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push the three required actions
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display peek, pop, remaining actions, and size
console.log('Top Action: ' + actionHistory.peek());
console.log('Undo Action: ' + actionHistory.pop());
console.log('Remaining Actions: ' + actionHistory.toString());
console.log('Stack Size: ' + actionHistory.size());

// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  // Internal storage using an array
  constructor() {
    this.items = [];
  }

  // Add an element at the back
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element
  dequeue() {
    return this.items.shift();
  }

  // Return the front without removing it
  front() {
    return this.items[0];
  }

  // Return true when empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements
  size() {
    return this.items.length;
  }

  // Return all elements as text
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue the four required requests
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display the front request
console.log('Next Request: ' + waitingRequests.front());

// Dequeue two requests
console.log('Processed: ' + waitingRequests.dequeue());
console.log('Processed: ' + waitingRequests.dequeue());

// Display the remaining queue and its size
console.log('Remaining Requests: ' + waitingRequests.toString());
console.log('Queue Size: ' + waitingRequests.size());

// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  // Internal storage using an array
  constructor() {
    this.items = [];
  }

  // Create an item, find the correct insertion position,
  // and preserve arrival order when priorities are equal
  enqueue(request, priority) {
    const item = { request, priority };
    let inserted = false;

    for (let i = 0; i < this.items.length; i++) {
      // Insert only when strictly higher priority (smaller number)
      // so items with equal priority keep their arrival order
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, item);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      this.items.push(item);
    }
  }

  // Remove and return the first item
  dequeue() {
    return this.items.shift();
  }

  // Return the number of items
  size() {
    return this.items.length;
  }

  // Display every request and priority
  print() {
    this.items.forEach((item) => {
      console.log(item.request + ', Priority ' + item.priority);
    });
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Enqueue the four required requests
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Print the initial priority order
console.log('Initial Priority Order:');
urgentRequests.print();

// Process the first request
const processed = urgentRequests.dequeue();
console.log('Processed Priority Request: ' + processed.request + ', Priority ' + processed.priority);

// Print the remaining requests
console.log('Remaining Priority Requests:');
urgentRequests.print();

// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node {
  // Store the element and set next to null
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  // Set length to zero and head to null
  constructor() {
    this.length = 0;
    this.head = null;
  }

  // Add a node at the end
  append(element) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  // Insert at the beginning, middle, or end
  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(element);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      node.next = current;
      previous.next = node;
    }

    this.length++;
    return true;
  }

  // Remove the node at the requested position
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = current.next;
    }

    this.length--;
    return current.element;
  }

  // Traverse and return the matching position, -1 when absent
  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  // Reuse indexOf and removeAt
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // Return true when no nodes exist
  isEmpty() {
    return this.length === 0;
  }

  // Return the number of nodes
  size() {
    return this.length;
  }

  // Traverse and return all elements as text
  toString() {
    let current = this.head;
    const values = [];

    while (current !== null) {
      values.push(current.element);
      current = current.next;
    }

    return values.join(', ');
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// Append the three required requests
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// Insert Ticket #400 at position 0
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');

// Insert Ticket #405 at the end
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');

// Display the complete list
console.log('Complete List: ' + completedRequests.toString());

// Search for Ticket #402
console.log('Index of Ticket #402: ' + completedRequests.indexOf('Ticket #402 - Printer Connected'));

// Remove the item at position 1
console.log('Removed at Position 1: ' + completedRequests.removeAt(1));

// Remove Ticket #403 by value
console.log('Removed by Value: ' + completedRequests.remove('Ticket #403 - Antivirus Updated'));

// Display the final list and size
console.log('Final List: ' + completedRequests.toString());
console.log('Final Size: ' + completedRequests.size());
