#!/usr/bin/env python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
#抄的 题解 
#https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/linked-list-cycle-ii-kuai-man-zhi-zhen-shuang-zhi-/
class Solution:
    def detectCycle(self, head):
        slow,fast = head,head
        while 1:
            #如果fast 或者fast不存在 说明不是环形直接 return
            if not (fast and fast.next): return
            slow,fast = slow.next,fast.next.next
            if slow == fast: break
        fast = head
        while slow != fast:
            slow,fast = slow.next,fast.next
        return fast
        
