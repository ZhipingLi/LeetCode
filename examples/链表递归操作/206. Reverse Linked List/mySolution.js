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
 var reverseList = function(head) {
    // 最内层递归会因head.next === null而返回head（反转链表后的头结点）
    // !head处理传入的head为null的情况
    if(!head || !head.next){ 
        return head
    }
    const last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last
};
