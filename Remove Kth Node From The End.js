//solution 1 
// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    // insert all nodes in array so i can have info on each node, and access the utilities  of the array
    let famTree = []
    let current = head 
    while(current !== null){
      famTree.push(current)
      current = current.next
    }
    //once all the nodes are in the array we want to take care of the edge case where the node 
    //we want to delete is the head
    if(famTree.length - k <= 0){
      head.value = head.next.value
      head.next = head.next.next
      return famTree
    }
    //once the edge case is taken care of , i use the k to track down the node we want to delete
    //and change the preveious nodes .next refrence to skip over the node of interests
    famTree[famTree.length - k  - 1].next = famTree[famTree.length - k].next
    return famTree
  }
  // O(n) T, O(1) S
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;

// solution 2 

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    let temp = head
    let len = 0
    let previous
    while(temp){
      len++
      temp = temp.next
    }
    temp = head
    for(let i = 0; i< len -k; i++){
      previous = temp
      temp = temp.next
    }
    if(head == temp){
      head.value = head.next.value
      head.next = head.next.next
    } else {
      previous.next = temp.next
    }
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;

//solution 3 
// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    let count = 0
    let current = head
    while(current !== null){
      count++
      current = current.next
    }
    let kFromStart = count - k 
    current = head
    if(kFromStart === 0){
      head.value = head.next.value
      head.next = current.next.next
    }
    let newCount = 0
    while(current !== null){
      newCount++
      if(newCount === kFromStart){
        current.next = current.next.next
      } else {
        current = current.next
      }
    }
    return head 
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
  