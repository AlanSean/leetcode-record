/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.list = null;
    this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(!this.list || this.length-1 < index || index < 0) return -1;
    let i=0,list = this.list;
    while(list.next && i<index){
        list = list.next;
        i++;
    }
    if(i<index) return -1;
    return list.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.list = this.list == null ? {
        val: val,
        next: null
    } : {
        val: val,
        next: this.list
    }
    this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.list == null) {
        this.addAtHead(val);
        return;
    }
    let i=0,list = this.list;
    while(list.next){
        list = list.next;
    }
    list.next = {
        val:val,
        next:null
    }
    this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(this.list == null) {
        this.addAtHead(val);
        return;
    }
    if(index == 0){
        this.addAtHead(val);
        return 
    }
    let i=0,cur=this.list,list = this.list;
    while(list && i<index){
        cur = list;
        list = list.next;
        i++;
    }
    if(i == index) {
        cur.next = {
            val:val,
            next: list
        }
    }
    this.length++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index > this.length-1 ||index <0) return ;
    let i=0,cur=this.list,list = this.list;
    if(index == 0) {
        if(list.next){
            if(list.next.next){
                list.val = list.next.val
                list.next = list.next.next;
            } else {
                list.next = list.next;
            }
            
        }
    } else {
        while(list && i<index){
            cur = list;
            list = list.next;
            i++;
        }
        if(i == index && list){
            if(list.next){
                cur.next = list.next;
            } else {
                cur.next = null;
            }
        }
    }
    this.length--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */