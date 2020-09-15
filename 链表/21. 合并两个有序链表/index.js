/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists1 = function (l1, l2) {
    let l3 = {
            val: -1,
            next: null
        },
        l6 = l3,
        l4 = l1,
        l5 = l2;

    //哪个值小就移动哪个
    // I`m going to move whatever value us small
    while (l4 && l5){
        if (l4.val <= l5.val){
            l6.next = l4;
            l4 = l4.next;
        } else {
            l6.next = l5;
            l5 = l5.next;
        }
        l6 = l6.next;
    }
    l6.next = l4 || l5;
    return l3.next;
};
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val<l2.val){
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1,l2.next);
        return l2;
    }
};
