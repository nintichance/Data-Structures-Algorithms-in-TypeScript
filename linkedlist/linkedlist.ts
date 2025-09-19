export class LinkedList {
    head: ListNode | null;
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

    reverse(node: ListNode | null) {
        if (!node!.next) {
            this.head = node 
            return
        } 

        this.reverse(node!.next)
        const temp = node!.next
        temp.next = node 
        node!.next = null
    }

    printList() {
        const list = []
        let curr = this.head
        while(curr) {
            list.push(curr.value)
            curr = curr.next
        }
        return list
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
