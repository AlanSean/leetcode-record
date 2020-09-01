// @ts-nocheck
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 抄的 题解
// https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/linked-list-cycle-ii-kuai-man-zhi-zhen-shuang-zhi-/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head,
        fast = head;

    while (slow != fast) {
        if (!fast || !fast.next) {
            return null;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
};
