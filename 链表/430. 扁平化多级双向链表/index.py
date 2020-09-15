"""
# Definition for a Node.

"""
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        la = head
        while la:
            if la.child:
                child,tem,la.next,la.child.prev = la.child,la.next,la.child,la
                while child.next:
                    child = child.next
                child.next = tem
                if tem: tem.prev = child
                la.child = None
            la = la.next
        return head
            