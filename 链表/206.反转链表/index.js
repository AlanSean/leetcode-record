/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList1 = function(head) {
    let list = null,listb = head;

    while (listb){
        list = {
            val: listb.val,
            next: list
        };
        listb = listb.next;
    }
    // return list;
    console.log(list,head);
};


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 递归运行步骤
    // Run the steps  recursively
    //先调用的会在递归过程中最后被执行,最后调用的会最先执行
    //The ones that are called first are executed last in the recursive process, and the ones that are called last are executed first
    //所以最后调用的递归函数参数 是head的最后一项。
    // So the recursively function argument called at the end is the last item in the linked list
    if (!head || !head.next) return head;
    let reverseHead = reverseList(head.next);

    // head最后一项和这里（head.next.next）的内存指向是同一个地址
    // The last item in the head is the same address as the memory point here(head.next.next)
    // 所以修改这里,reverseHead也发生了变化
    // So modify here, the reverseHead has changed as well
    head.next.next = head;
    head.next = null;
    return reverseHead;
};

