/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers1 = function(l1, l2) {
    let l3 = new ListNode(-1),
        l4 = l3;

    while (l1 || l2){
        let tem = (l1 ? l1.val : 0) + (l2 ? l2.val : 0),
            carry = Math.floor(tem/10);

        l4.next = new ListNode(tem%10);
        l4 = l4.next;
        //判断进位数是否大于1
        //大于则下一级加1
        if (carry >=1){
            //如果l1存在下一级则直接给下一级加1
            if (l1&&l1.next){
                l1.next.val+=carry;
            //如果l2存在下一级则直接给下一级加1
            } else if (l2&&l2.next) {
                l2.next.val+=carry;
            //都不存在下一级说明到了尽头
            } else {
                l4.next=new ListNode(carry);
            }
        }
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    return l3.next;
};
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(-1),
        l4 = l3,carry=0;

    while (l1 || l2){
        carry+=(l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        l4.next = new ListNode(carry%10);
        carry = Math.floor(carry/10);
        l4 = l4.next;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    carry >0 && (l4.next=new ListNode(carry));
    return l3.next;
};
