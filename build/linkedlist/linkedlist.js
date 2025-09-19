"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
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
    reverse(node) {
        if (!node.next) {
            this.head = node;
            return;
        }
        this.reverse(node.next);
        const temp = node.next;
        temp.next = node;
        node.next = null;
    }
    printList() {
        const list = [];
        let curr = this.head;
        while (curr) {
            list.push(curr.value);
            curr = curr.next;
        }
        return list;
    }
}
exports.LinkedList = LinkedList;
class ListNode {
    next;
    value;
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
//# sourceMappingURL=linkedlist.js.map