# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        l3 = ListNode(-1)
        l4,carry = l3,0
        while l1 or l2:
            carry += (l1.val if l1 else 0)+ (l2.val if l2 else 0)
            l4.next = ListNode(carry%10)
            l4 = l4.next
            carry //= 10
            if l1: l1 = l1.next 
            if l2: l2= l2.next
        if carry>0: l4.next = ListNode(carry)
        return l3.next