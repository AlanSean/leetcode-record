/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList0 = function (head) {
    let newHead = new Node(-1),
        na = newHead,
        la = head,
        index = 0,
        obj = {};


    while (la) {
        obj[index++] = {
            map: la,
            random: null
        };
        la = la.next;
    }
    la = head;
    for (let key in obj) {
        for (let k in obj) {
            if (obj[key].map.random === obj[k].map) {
                obj[key].random = k;
                break;
            }
        }
    }
    la = head,
        index = 0;
    while (la) {

        na.next = new Node(la.val, null, obj[index].random || null);
        na = na.next;
        obj[index++].map = na;
        la = la.next;
    }
    na = newHead.next;
    while (na) {
        if (na.random) {
            na.random = obj[na.random].map;
        }
        na = na.next;
    }
    // console.log(na)
    return newHead.next;
};
var copyRandomList1 = function (head) {
    let newHead = new Node(-1),
        na = newHead,
        la = head,
        index = 0,
        obj = {};

    //这里就是做了个映射
    //通过对比得到random是第几个节点
    //obj map存储复制后的节点
    while (la) {
        obj[index] = {
            map: null,
            random: null
        };

        if (la.random) {
            let k = head,
                i = 0;

            while (k) {
                if (la.random === k) {
                    obj[index].random = i;
                    break;
                }
                k = k.next;
                i++;
            }
        }

        na.next = new Node(la.val, null, obj[index].random);
        na = na.next;
        obj[index].map = na;
        la = la.next;
        index++;
    }
    //根据映射来赋值random
    na = newHead.next;
    while (na) {
        if (na.random !== null) {
            na.random = obj[na.random].map;
        }
        na = na.next;
    }
    return newHead.next;
};
//精髓就是 把当前节点作为key 深复制的新节点作为值
//然后 节点的random不为空时 去map里取对应 深复制的节点作为新链表节点的random
var copyRandomList2 = function (head) {
    let newHead = new Node(-1),
        na = newHead,
        la = head,
        map = new Map();

    while (la){
        na.next = new Node(la.val,null,null);
        na = na.next;
        map.set(la,na);
        la = la.next;
    }
    la = head,
    na = newHead.next;
    while (la){
        la.random && (na.random = map.get(la.random));
        la = la.next;
        na = na.next;
    }
    return newHead.next;
};
//原理就是复制当前节点并成为当前节点的next节点
//就形成了 A-A-B-B-C-C-null,前是原节点 后是复制的节点
//仔细观察 可以看出 原节点A的random 指向的节点的next 是复制后的节点
//所以当前节点存在random时 那么当前节点的next节点的random 就等于 当前节点的random节点的next
//最后再取出复制的节点并在原链表里删除
var copyRandomList = function (head) {
    let lista = head,node=null,newHead = new Node(-1,null,null);

    while (lista){
        let tem = lista.next;

        node = new Node(lista.val,null,null);
        lista.next = node;
        node.next = tem;

        lista = tem;
    }
    lista = head;
    while (lista){
        if (lista.random){
            lista.next.random = lista.random.next;
        }
        lista = lista.next.next;
    }
    node = newHead;
    lista = head;
    while (lista){
        node.next = lista.next;
        node = node.next;
        lista.next = node.next;
        lista = lista.next;
    }
    return newHead;
};
