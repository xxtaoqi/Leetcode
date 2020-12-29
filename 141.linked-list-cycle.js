/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    var [slow,fast] = [head,head];
    while (fast) {
        if (!fast.next || !slow.next) return false; //[1]
        [slow,fast] = [slow.next,fast.next.next];
        if (slow == fast)  return true;
    }
    return false
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = hasCycle;
// @after-stub-for-debug-end