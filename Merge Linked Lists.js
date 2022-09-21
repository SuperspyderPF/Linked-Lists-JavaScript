// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeLinkedLists(headOne, headTwo) {
      let dummyHead = new LinkedList(0);
      let currentNode = dummyHead; 
  
      while(headOne !== null && headTwo !== null){
  
          if(headOne.value < headTwo.value){
              currentNode.next = headOne;
              headOne = headOne.next
          } else {
              currentNode.next = headTwo
              headTwo = headTwo.next
          }
  
          currentNode = currentNode.next
      }
  
      if(headOne !== null) {
          currentNode.next = headOne;
      } else if (headTwo !== null) {
          currentNode.next = headTwo
      }
  
      return dummyHead.next
  }
  
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.mergeLinkedLists = mergeLinkedLists;
  