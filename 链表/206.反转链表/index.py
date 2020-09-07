#!/usr/bin/env python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def reverseList(self, head):
        lista,listb = None,head
        while listb:
            listc = lista
            lista ,listb = listb,listb.next
            lista.next = listc
        return lista
    def reverseList1(self, head):
        if not head or not head.next:
            return head
        reserseHead = self.reverseList1(head.next)
        head.next.next = head
        head.next = None
        return reserseHead

