# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        lista,listb,listc = None,head,head

        while listc and listc.next:
            listc = listc.next.next
            tem = listb.next

            listb.next,lista,listb = lista,listb,tem
        
        if listc: listb = listb.next
        while lista:
            if lista.val != listb.val: return False
            lista,listb = lista.next,listb.next
        return True
