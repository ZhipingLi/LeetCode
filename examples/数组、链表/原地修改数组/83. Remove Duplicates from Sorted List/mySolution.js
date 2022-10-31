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

 var deleteDuplicates = function(head) {
    if(!head) return head;
    let slow = head, fast = head
    while(fast){
        if(fast.val !== slow.val){
            slow.next = fast
            slow = slow.next
        }
        fast = fast.next
    }
    slow.next = null
    return head
};