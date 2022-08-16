/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) { //如果中点有两个，该解法返回靠后的节点
    let left = head, right = head
    while(right && right.next){
      left = left.next
      right = right.next.next
    }
    return left
  };

 var middleNode = function(head) {
    let dummy = new ListNode(-1,head)
    let slow = dummy, fast = dummy
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    if(fast){
        return slow.next
    }else{
        return slow
    }
};