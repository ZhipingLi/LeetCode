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
    if (!head) return head;
    let x = head;
    while (x.next) {
        if (x.val === x.next.val) { // 与相邻点相等则跳过该节点
            x.next = x.next.next;
        } else {
            x = x.next;
        }
    }
    
    return head;
};