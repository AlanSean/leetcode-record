/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
function Node(val,prev,next,child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let la = head;//la  = 当前节点

    while (la){
        //当存在child时
        if (la.child){
            //缓存child链表 用来遍历
            let child = la.child,
            //缓存la节点的next
                tem = la.next;

            //将la的next 接到child上
            la.next = child;
            //child的prev接到la上
            child.prev = la;
            //将child 移动到最后一个节点
            while (child.next){
                child = child.next;
            }
            // 将child的下一个节点接到tem
            //不需要判断等不等于 null
            child.next = tem;
            //如果存在 就把 tem的prev接到child上（当前child已经是la.child的最后一个节点了）
            if (tem){
                tem.prev = child;
            }
            //将la的child链表设置为null
            la.child = null;
        }
        //存在la存在child时
        //此时la的next已经等于la.child了 所以不需要考虑深层child
        la = la.next;
    }
    return head;
};