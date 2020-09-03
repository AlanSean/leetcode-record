#!/usr/bin/env python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    # 暴力法
    def getIntersectionNode(self, headA, headB):
        while headA :
            headb = headB
            while headb:
                if (headA == headb): 
                    return headA
                headb = headb.next
            headA = headA.next
        return headA
    # listA+listB 法 如果链表相交 那么必定同时到达终点
    def getIntersectionNode1(self, headA, headB):
        lista,listb = headA,headB
        while lista != listb:
            lista = lista.next if lista else headB
            listb = listb.next if listb else headA

        return lista
print(Solution().getIntersectionNode1(listA,listB))


