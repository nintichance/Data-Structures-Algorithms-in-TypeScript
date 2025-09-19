"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedList {
    head;
    constructor() {
        this.head = null;
    }
    append(value) {
        if (!this.head)
            this.head = new ListNode(value);
        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = new ListNode(value);
        }
    }
}
class ListNode {
    next;
    value;
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
//# sourceMappingURL=implementation.js.map