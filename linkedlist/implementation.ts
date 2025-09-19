class LinkedList {
    private head: ListNode | null;
    constructor(){
        this.head = null
    }

    append(value: number) {
        if (!this.head) this.head = new ListNode(value);
        else {
            let curr = this.head
            while(curr.next) {
                curr = curr.next
            }
            curr.next = new ListNode(value);
        }
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
