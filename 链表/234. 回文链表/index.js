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
var isPalindrome = function (head) {
    let lista = null,
        listc = head,
        listb = head;

    // 原理：反转起点到回文点的节点，与回文点到终点的节点进行比较
    // Principle: Reverses the node from the origin to the loopback and compares it to the node from the loopback to the endpoint
    while (listc && listc.next) {
        // listc走2个节点 listb走1个节点 listc走到结束
        // Listc go two nodes,listb go ont nodes,listc walk to ends
        //如果长度是奇数  listb会正好停在中间
        //if length is odd,listb will stop right in the middle
        //如果是长度是偶数 listb会正好停在判断回文的节点
        //if length is even,listb will stop right judged loopback nodes
        listc = listc.next.next;
        let tem = listb.next;

        // 进行反转 其实就是依次把当前节点放在lista的头
        // Reverses linked nodes,put the current node at the head of the lista in turn
        listb.next = lista;
        lista = listb;
        listb = tem;
    }
    //如果结束时listc不是null 说明链表长度是奇数 反之偶数
    //if at the end of listc not null,Indicating an length is odd,whereas even
    if (listc) listb = listb.next;
    while (lista) {
        if (lista.val != listb.val) return false;
        lista = lista.next;
        listb = listb.next;
    }
    return true;
};