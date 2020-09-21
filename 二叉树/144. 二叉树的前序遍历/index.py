# Definition for a binary tree node.
from typing import List


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def forwards(self, root: TreeNode, list: [int]):
        if not root: return
        list.append(root.val)
        self.forwards(root.left, list)
        self.forwards(root.right, list)

    def preorderTraversal1(self, root: TreeNode) -> List[int]:
        list = []
        self.forwards(root, list)
        print(list)
        return list
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        stack,list = [],[]
        if root: stack.append(root)
        while stack:
            curNode = stack.pop()
            if curNode:  
                list.append(curNode.val)
                stack.append(curNode.right)
                stack.append(curNode.left)
        return list
 

root = TreeNode('F')
r = root

r.left = TreeNode('B')
r.left.left = TreeNode('A')
r.left.right = TreeNode('D')
r.left.right.left = TreeNode('C')
r.left.right.right = TreeNode('E')
r.right = TreeNode('G')
r.right.right = TreeNode('I')
r.right.right.left = TreeNode('H')

Solution().preorderTraversal(root)
