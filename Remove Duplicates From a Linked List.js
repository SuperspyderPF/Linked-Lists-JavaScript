// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    let current = linkedList
    while(current && current.next){
      if(current.value == current.next.value){
        current.next = current.next.next
      } else {
        current = current.next
      }
    }
    return linkedList
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  