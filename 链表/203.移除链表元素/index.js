/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 快慢指针
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements1 = function(head, val) {
    if (!head) return head;

    let fast = head.next,slow=head;

    while (fast){
        if (fast.val == val){
            slow.next = fast.next;
        } else {
            slow = slow.next;
        }
        fast = fast.next;
    }
    if (head.val == val) head = head.next;
    return head;
};

/**递归
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return head;

    head.next = removeElements(head.next,val);
    if (head.val == val) head = head.next;
    return head;
};