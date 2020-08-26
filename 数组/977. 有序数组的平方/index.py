#!/usr/bin/env python
class Solution:
    def sortedSquares(self, A):
        n = len(A)-1
        i= 0
        ans = []
        while i <= n:
            if(A[i]+A[n] <0) :
                ans.insert(0,A[i]**2)
                i+=1
            else :
                ans.insert(0,A[n]**2)
                n-=1
        print(ans)
        return ans

Solution().sortedSquares([-4,-3,0,1,3,10])

