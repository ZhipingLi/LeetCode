/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let p1 = headA, p2 = headB
    while(p1 !== p2){
        if(!p1) p1 = headB
        else p1 = p1.next
        if(!p2) p2 = headA
        else p2 = p2.next
    }
    if(p1) return p1
    else return null
};