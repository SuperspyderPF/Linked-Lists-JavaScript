// solution 1
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let carry = 0;
    var curr;
    let p = (curr = new LinkedList(0));
    var sum = 0;
    while (linkedListOne || linkedListTwo) {
  
      if (linkedListOne && linkedListTwo) {
        sum = linkedListOne.value + linkedListTwo.value + carry;
        linkedListOne=linkedListOne.next;
        linkedListTwo=linkedListTwo.next;
      } else if (linkedListOne) {
        sum = linkedListOne.value + carry;
        linkedListOne=linkedListOne.next;
      } else if (linkedListTwo) {
        sum = linkedListTwo.value + carry;
        linkedListTwo=linkedListTwo.next;
      }
  
      carry = Math.floor(sum / 10);
      sum = Math.floor(sum) % 10;
      curr.next = new LinkedList(sum);
      curr = curr.next;
  
    }
  
    if(carry===1)
      curr.next=new LinkedList(carry);
    return p.next;
  };
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.sumOfLinkedLists = sumOfLinkedLists;
  


// solution 2 
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
    function sumOfLinkedLists(linkedListOne, linkedListTwo){
      let carry = 0;
      let curr = new LinkedList(0);
      let p = curr;
  
      while (linkedListOne || linkedListTwo) {
          const sum = (linkedListOne?.value || 0) + (linkedListTwo?.value || 0) + carry;
          linkedListOne=linkedListOne?.next;
          linkedListTwo=linkedListTwo?.next;
  
          carry = sum > 9 ? 1 : 0;
          curr.next = new LinkedList(sum % 10);
          curr = curr.next;
      }
  
      if(!!carry) {
          curr.next = new LinkedList(1);
      }
      return p.next;
  };
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.sumOfLinkedLists = sumOfLinkedLists;
  