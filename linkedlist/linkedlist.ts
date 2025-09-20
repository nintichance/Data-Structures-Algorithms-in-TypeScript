export class LinkedList {
    head: ListNode | null;
    constructor(){
        this.head = null;
    }

    append(value: number) {
        if (!this.head) this.head = new ListNode(value);
        else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = new ListNode(value);
        }
    }

    reverse(node: ListNode | null) {
        if (!node!.next) {
            this.head = node;
            return;
        } 

        this.reverse(node!.next);
        const temp = node!.next;
        temp.next = node;
        node!.next = null;
    }

    intersectingLinkedList(headB: ListNode | null): ListNode | null {
        const set: Set<ListNode | null> = new Set();
        let headA = this.head;
        while(headB) {
            set.add(headB)
            headB = headB.next
        }
        while(headA) {
            if (set.has(headA)) return headA
            headA = headA.next
        }
        return null
    }

    printList(head: ListNode | null) {
        const list = [];
        let curr = head;
        while(curr) {
            list.push(curr.value);
            curr = curr.next;
        }
        return list;
    }
}

class ListNode {
    next: ListNode | null;
    value: number;
    constructor(value: number) {
        this.next = null;
        this.value = value;
    }
}
