class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

     append(val) {
         if(!this.tail) {
             this.head = this.tail = new Node(val)
         }
         else {
             let oldTail = this.tail
             this.tail = new Node(val)
             oldTail.next = this.tail
             this.tail.prev = oldTail
         }
     }

     prepend(val) {
         if(!this.head) {
             this.head = this.tail = new Node(val)
         } 
         else {
             let oldHead = this.head
             this.head = new Node(val) 
             oldHead.prev = this.head
             this.head.next = oldHead
         }
     }

     deleteHead(val) {
         if(!this.head) {
             return null
         } 
         else {
             let removedHead = this.head
             if(this.head === this.tail) {
                 this.head = this.tail =null
             }
             else {
                 this.head = this.head.next 
                 this.head.prev = null
             }
             return removedHead.val
         }
     }

     deleteTail(val) {
         if(!this.tail) {
             return null
         }
         else {
             let removedTail = this.tail
             if(this.head = this.tail) {
                 this.head = this.tail = null
             }
             else {
                 this.tail = this.tail.prev 
                 this.tail.next = null
             }
             return removedTail.val
         }
     }

     search(val) {
         let currentNode = this.head

         while(currentNode) {
             if(currentNode.val === val) {
                 return currentNode
             } 
             else {
                 currentNode.next
             }
             return null
         }
     }
}

class Node {
    constructor(val, prev, next) {
        this.val = val
        this.prev = prev || null
        this.next = next || null
    }
}