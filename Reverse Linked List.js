// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    let previous = null 
    let current = head 
    while(current){
      const next = current.next
      current.next = previous
      previous = current
      current = next 
    }
    return previous
  }
  
  //time = O(n) space  = O(1)
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.reverseLinkedList = reverseLinkedList;
  