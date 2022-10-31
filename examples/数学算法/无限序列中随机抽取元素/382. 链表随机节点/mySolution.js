/**
 * 要求：
 * 1. 每次获取随机元素只能遍历一次
 * 2. 不使用额外空间
 * 
 * 思路：
 * 当遇到第i个元素时，1 / i的概率选择该元素，1 - 1 / i的概率保持原有的选择。
 * 
 * 拓展：
 * 随机抽取k个元素：当遇到第i个元素时，k / i的概率选择该元素，1 - k / i的概率保持原有选择。
 * 注意：随机抽取k个元素时，从k + 1个元素开始遍历（默认前k个元素被选上）。
 */
 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
 var Solution = function(head) {
  this.head = head
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let res = 0, p = this.head, i = 1
  while(p){
    const random = Math.floor(Math.random() * i) + 1
    if(random === 1) res = p.val
    p = p.next
    i++
  }
  return res
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */