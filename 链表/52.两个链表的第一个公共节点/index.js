let list = {
    val: 8,
    next: {
        val: 4,
        next: {
            val: 5,
            next: null
        }
    }
},
listA = {
    val: 4,
    next: {
        val: 1,
        next: null
    }
},
listB = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 1,
            next: list
        }
    }
};

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/

/** 暴力法
* @param {ListNode} headA
* @param {ListNode} headB
* @return {ListNode|null}
*/
var getIntersectionNode = function (headA, headB) {
let b;

while (headA) {
    b = headB;
    while (b) {
        if (headA === b) return headA;
        b = b.next;
    }
    headA = headA.next;
}
return null;
};


/** headA+headB法
* @param {ListNode} headA
* @param {ListNode} headB
* @return {ListNode|null}
*/
var getIntersectionNode1 = function (headA, headB) {
let a=headA,b=headB;

while (a!=b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
}
return a;
};
