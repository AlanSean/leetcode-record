#!/usr/bin/env python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head, n):
        length,index,listHead = 0,0,head
        while listHead:
            listHead = listHead.next
            length +=1
        if length == n:
            head = head.next
            return head
        listHead = head
        while length-n-1 != index:
            listHead = listHead.next
            index+=1
        listHead = listHead.next.next or None
        return head
    def removeNthFromEnd1(self, head, n):
        listA,listB = head,head
        while listA:
            if n <0 : listB = listB.next
            listA = listA.next
            n-=1
        if n == 0: 
            head = head.next
            return head
        listB = listB.next.next or None
        return head

