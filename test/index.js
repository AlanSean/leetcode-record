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
let listA = new ListNode(1),
    la = listA;

    la.next=new ListNode(2);
    la = la.next;
    la.next=new ListNode(3);
    la = la.next;
    la.next=new ListNode(4);
    la = la.next;
    la.next=new ListNode(5);

//一开始做的时候 内存溢出了 发现有移动20万次
//然后就想到了用k%链表长度来取得要实际移动的次数
//后面的就其实没啥难度了
//方法1：其实就是每次拿链表的最后一位放到头上 放 newk次 就是移动的次数
//方法2: 就是利用哨兵 在19.从列表末尾删除第n个节点里面用到过
//方法3: 移动到 倒数k+1步 也就是 length-k-1的位置
//1-2-3-4-5 走2步(5-2-1)后的链表是  3-4-5
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight1 = function(head, k) {
    if (!head || !head.next || k==0) return head;
    //这里就是计算链表长度 和计算实际移动的次数
    let h = head,length=0;

    while (h){
        h = h.next;
        length++;
    }
    k = k%length;
    //如果实际 k 和链表长度一致k就会等于0说明转了个圈 直接返回
    if (k==0) return head;
    h = head;
    //走到倒数第二个节点停止
    while (h.next.next){
        h = h.next;
    }
    let tem = h.next;

    //断尾
    h.next = null;
    //接头
    tem.next = head;
    head = tem;
    k--;
    return k > 0 ? rotateRight1(head,k) : head;
};
var rotateRight = function(head, k) {
    if (!head || !head.next || k==0) return head;
    let h = head,length=0;

    while (h){
        h = h.next;
        length++;
    }
    k = k%length;
    if (k==0) return head;
    //用哨兵的方式
    // let h2 = head;

    // h = head;
    // while (h){
    //     if (k<0) h2 = h2.next;
    //     h = h.next;
    //     k--;
    // }
    //length-k是新头的节点length-k-1为尾
    k = length-k-1;
    h = head;
    while (k>0){
        h = h.next;
        k--;
    }
    //此时这里是length-k-1节点
    let tem = h.next,
        t =tem;

    //断尾
    h.next = null;

    while (t.next){
        t = t.next;
   }
   //接头
   t.next = head;
   head = tem;
   return head;
};
//官方的方式更加精髓一下 先形成闭环再进行切断
var rotateRight12 = function(head, k) {
    if (!head || !head.next || k==0) return head;
    //为了计算正确的长度 所以length起点1 因为判断点是h.next
    let h = head,length=1;//length=0

    while (h.next){
        h = h.next;
        length++;
    }
    //length++;
    k = k%length;
    if (k==0) return head;
    //让这里形成环
    h.next = head;
    k = length-k;//倒数1步 走4步
    //移动k步
    while (k>0){
        h = h.next;
        k--;
    }
    let newHead = h.next;

    h.next = null;
   return newHead;
};

console.log(rotateRight(listA,1));