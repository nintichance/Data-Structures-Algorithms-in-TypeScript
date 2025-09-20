export declare class LinkedList {
    head: ListNode | null;
    constructor();
    append(value: number): void;
    reverse(node: ListNode | null): void;
    intersectingLinkedList(headB: ListNode | null): ListNode | null;
    printList(head: ListNode | null): number[];
}
declare class ListNode {
    next: ListNode | null;
    value: number;
    constructor(value: number);
}
export {};
//# sourceMappingURL=linkedlist.d.ts.map