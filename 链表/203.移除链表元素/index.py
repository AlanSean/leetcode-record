# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

from typing import List

class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        if not head: return head
        head.next = self.removeElements(head.next,val)
        if head.val == val: 
            head = head.next
        return head
    def removeElements1(self, head: ListNode, val: int) -> ListNode:
        if not head: return head
        slow,fast = head,head.next
        while fast:
            if fast.val == val :
                slow.next = fast.next
            else :
                slow = slow.next
            fast = fast.next
        
        if head.val == val:
            head = head.next
        return head