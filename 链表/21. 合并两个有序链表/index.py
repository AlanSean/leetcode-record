# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeTwoLists1(self, l1: ListNode, l2: ListNode) -> ListNode:
        l3 = ListNode(-1)
        
        l4,l5,l6=l3,l1,l2
        while l5 and l6 :
            if l5.val < l6.val:
                l4.next = l5
                l5=l5.next
            else :
                l4.next = l6
                l6=l6.next
            l4 = l4.next
        l4.next = l5 or l6
        return l3.next
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1: return l2
        if not l2: return l1
        if l1.val <=l2.val:
            l1.next = self.mergeTwoLists(l1.next,l2)
            return l1
        else:
            l2.next = self.mergeTwoLists(l1,l2.next)
            return l2