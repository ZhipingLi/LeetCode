/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-1,undefined)
    let right = dummy, left = dummy
    dummy.next = head
    for(let i=1; i<=n; i++){
        right = right.next
    }
    while(right && right.next){ 
        left = left.next
        right = right.next
    }
    left.next = left.next.next 
    
    return dummy.next // 当参数为([1],1)时，原来的头结点应该被删除，此处改为head则会出错，尽量使用dummy.next表示要返回的头结点
    /**
     * 注意： 1. node.next在“=”左边表示线；在“=”右边表示点
     *       2. 单链表中，要删除第K个节点，必须要第K-1的点上操作。
     */
};