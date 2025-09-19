import { LinkedList } from './linkedlist'

describe('LinkedList', () => {
    let list: LinkedList
    let listPrinted: number[]
    beforeEach(()=>{
        list = new LinkedList()
        for (let i=1; i<4; i++) {
            list.append(i)
        }      
    })
    
    it('creates a linked list when append is called with values', ()=> {
        listPrinted = list.printList()
        expect(listPrinted).toEqual([ 1, 2, 3 ])
    })
    

    it('reverses a given LinkedList', ()=> {
        list.reverse(list.head)
        listPrinted = list.printList()
        expect(listPrinted).toEqual([ 3, 2, 1 ])
    })
})