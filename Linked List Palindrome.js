// Solution 1
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function linkedListPalindrome(head) {
    let slow = head
    let fast = head 
    const stack = [] 
    while(fast){
      if(!fast.next){
        slow = slow.next
        break
      }
      stack.push(slow.value)
      slow = slow.next
      fast = fast.next.next
      
    }
    while(slow){
      if(stack.pop() != slow.value) return false
      slow = slow.next
    }
    return true
    
  }
  //time O(n) space O(n)
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.linkedListPalindrome = linkedListPalindrome;
  


// solution 2 
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  function findMidpoint(head){
    let slow = head 
    let fast = head 
    while(fast && fast.next){
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }
  function reverse(head){
    let prev = null 
    let cur = head
    while(cur){
      const next = cur.next
      cur.next = prev
      prev = cur 
      cur = next
    }
    return prev
  }
  function compare(list1, list2){
    while(list1 && list2){
      if(list1.value !== list2.value) return false 
      list1 = list1.next 
      list2 = list2.next
    }
    return true
  }
  
  function linkedListPalindrome(head) {
    const midpoint = findMidpoint(head)
    const tail = reverse(midpoint)
    return compare(head, tail)
  }
  //O(n) time O(1) space
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.linkedListPalindrome = linkedListPalindrome;
  