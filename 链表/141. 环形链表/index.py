#!/usr/bin/env python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head):
        if head is None or head.next is None: return False
        slow = head
        fast = head.next
        while (slow != fast):
            if fast is None or fast.next is None:
                return False
            slow = slow.next
            fast = fast.next.next
        return True