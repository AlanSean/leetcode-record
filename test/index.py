#Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
    def keys(self):
        return ['val', 'next']
    def __getitem__(self, item):
        return getattr(self, item)

class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        if not head or not head.next or k==0: return head
        oldHead,length = head,1

        while oldHead.next:
            oldHead = oldHead.next
            length+=1

        k = k%length
        if k == 0:return head

        oldHead.next,k = head,length-k

        while k>0:
            oldHead = oldHead.next
            k-=1
        newHead = oldHead.next
        oldHead.next = None
        head = newHead

        return head
listA = ListNode(1)
la = listA
la.next = ListNode(2)
la = la.next
la.next = ListNode(3)
la = la.next
la.next = ListNode(4)
la = la.next
la.next = ListNode(5)


Solution().rotateRight(listA,2)