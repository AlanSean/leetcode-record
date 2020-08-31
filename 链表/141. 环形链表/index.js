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

// 快慢指针 如果是环形列表 快慢指针迟早会相遇 让快指针是慢指针行走的2倍
var hasCycle = function (head) {
    let cur = head,
        next = head.next;
    while (cur != next) {
        if (!next || !next.next) return false
        cur = cur.next;
        next = next.next.next;
    }
    return true
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// hasMap
var hasCycle = function (head) {
    let map = new Map(),
        list = head;
    while (list) {
        if (map.has(list)) return true;
        map.set(list, true);
        list = list.next;
    }
    return false
};