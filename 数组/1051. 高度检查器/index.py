#!/usr/bin/env python
class Solution:
    def sortedSquares(self, heights):
        ans = [0]*101
        for val in heights: 
            ans[val]+=1

        count=0
        j=0
        for i in range(len(ans)):
            while( ans[i] > 0):
                ans[i]-=1
                if(heights[j] !=i):
                    count += 1
                j+=1
        return count

Solution().sortedSquares([1,1,4,2,1,3])