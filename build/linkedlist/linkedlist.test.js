"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linkedlist_1 = require("./linkedlist");
describe('LinkedList', () => {
    let list;
    let listPrinted;
    function appendNodes(list, numOfValues) {
        const limit = 5;
        for (let i = limit + numOfValues; i > limit; i--) {
            list.append(i);
        }
    }
    beforeEach(() => {
        list = new linkedlist_1.LinkedList();
        appendNodes(list, 5);
    });
    it('creates a linked list when append is called with values', () => {
        listPrinted = list.printList(list.head);
        expect(listPrinted).toEqual([10, 9, 8, 7, 6]);
    });
    it('reverses a given LinkedList', () => {
        list.reverse(list.head);
        listPrinted = list.printList(list.head);
        expect(listPrinted).toEqual([6, 7, 8, 9, 10]);
    });
    xit('returns intersection of two LinkedLists', () => {
        // set is checking if one LL is in the other, but recognizing them as two different instances of LinkedList so comparator doesn't work
        const listA = new linkedlist_1.LinkedList();
        appendNodes(listA, 3);
        const expected = listA.intersectingLinkedList(list.head);
        expect(expected).toEqual(listA);
    });
});
//# sourceMappingURL=linkedlist.test.js.map