import { BST } from './bst'

describe('BST', ()=> {
    let bst: BST;
    beforeEach(()=> {
        bst = new BST(2)
        bst.insert(3)
        bst.insert(12)
        bst.insert(15)
        bst.insert(28)
        bst.insert(36)
        bst.insert(39)
    })

    describe('contains', ()=> {
        it('is true if the bst has value', ()=> {
            expect(bst.contains(3)).toBe(true);
        })
        it('is false if the bst does not have value', ()=> {
            expect(bst.contains(100)).toBe(false);
        })
    })

    describe('min', ()=> {
        it('is 2', ()=> {
            expect(bst.min()).toBe(2);
        })
    })

    describe('max', ()=> {
        it('is 39', ()=> {
            expect(bst.max()).toBe(39);
        })
    })
})