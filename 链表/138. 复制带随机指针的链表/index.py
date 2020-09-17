"""
# Definition for a Node.

"""
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random

class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        lista,newHead = head,Node(-1)

        while lista:
            tem = lista.next
            node = Node(lista.val)
            node.next = lista.next
            lista.next = node
            lista = tem
        
        lista = head

        while lista:
            if lista.random:
                lista.next.random = lista.random.next
            lista = lista.next.next

        lista = head
        node = newHead

        while lista:
            node.next = lista.next
            node = node.next
            lista.next = node.next
            lista = lista.next
        
        return newHead.next
    def copyRandomList(self, head: 'Node') -> 'Node':
        lista,newHead = head,Node(-1)

        while lista:
            tem = lista.next
            node = Node(lista.val)
            node.next = lista.next
            lista.next = node
            lista = tem
        
        lista = head

        while lista:
            if lista.random:
                lista.next.random = lista.random.next
            lista = lista.next.next

        lista = head
        node = newHead

        while lista:
            node.next = lista.next
            node = node.next
            lista.next = node.next
            lista = lista.next
        
        return newHead.next

#生成题的链表
listA = Node(7)
la = listA
i=0
obj={}
obj[i] = la
i+=1
la.next = Node(13)
la = la.next
obj[i] = la
i+=1
la.next = Node(11)
la = la.next
obj[i] = la
i+=1
la.next = Node(10)
la = la.next
obj[i] = la
i+=1
la.next = Node(1)
la = la.next
obj[i] = la
i+=1
obj[1].random = obj[0]
obj[2].random = obj[4]
obj[3].random = obj[2]
obj[4].random = obj[0]
print(listA == Solution().copyRandomList(listA))