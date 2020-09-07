/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len =0,index=0,list = head;

    //遍历链表先获取长度
    while (list){
        list = list.next;
        len++;
    }
    //如果 len  等于 n 说明需要删除第一个节点 直接进行删除返回即可
    if (len == n) {
        head = head.next;
        return head;
    }
    list = head;
    //长度减去n是要删除的节点 选中要删除的前一个元素 len-n-1 删除节点的前一个节点
    while (len-n-1 != index){
        list = list.next;
        index++;
    }
    //删除节点
    //list.next 是要删除的节点 所以list.next被list.next.next覆盖就是删除了该节点
    list.next = list.next.next || null;
    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function(head, n) {
    let first = head,second = head;

    // first链表 从开头移动到结尾并且n自减
    // first linked list moves from the beginning to the end and n--
    //当 n=0时，second链表开始移动节点
    // When n=0,second linked list start moveing node
    while (first){
        if (n<0) second = second.next;
        first = first.next;
        n--;
    }
    //当first链表节点移动结束时
    //When first linked list node move to the end
    //当n等于0时，表示second链表节点没有移动，所以要删除的是第一个节点
    // When n ==0,it means second linked list node has not moved,so the first node is to be deleted
    if (n==0) return (head = second.next) && head;
    //n小于0时,second链表节点的位置正好在要删除的前一个节点上
    //When n < 0, second linked list node is located exactly on the previous node tobe deleted,
    //因为second链表节点和fast链表节点的间隔为n
    //Because second linked list node and fasr linked list node are spaced n apart
    second.next = second.next.next || null;
    return head;
};
