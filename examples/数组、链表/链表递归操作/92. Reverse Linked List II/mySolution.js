/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if(left === 1){
        let temp
        return reverseFirstN(head,right)
    }
    head.next = reverseBetween(head.next,left-1,right-1)
    return head
};

//递归反转前N个节点
var reverseFirstN = function(head,n){
    if(n === 1){
        temp = head.next
        return head
    }
    const last = reverseFirstN(head.next,n-1)
    head.next.next = head
    head.next = temp
    return last
}