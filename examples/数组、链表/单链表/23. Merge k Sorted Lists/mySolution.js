/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let dummy = new ListNode(-1,undefined), p = dummy
    let heads = lists.filter(head => head).sort((a,b) => a.val-b.val)
    while(heads && heads[0]){
        p.next = heads[0]
        p = p.next
        heads[0] = heads[0].next
        heads = heads.filter(head => head).sort((a,b) => a.val-b.val)
    }
    return dummy.next
};