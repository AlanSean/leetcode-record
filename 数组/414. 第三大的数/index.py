#!/usr/bin/env python
class Solution:
    def thirdMax(self, nums):
        if (len(nums)<3) :
            return max(nums)
        max1= max2= max3= minInf = float("-inf")
        for i in nums:
            if (i > max1) :
                max3 = max2
                max2 = max1
                max1 = i
                continue
            if i!=max1 and i>max2:
                max3 = max2
                max2 = i
                continue
            if i!=max1 and i!=max2  and i>max3: 
                max3 = i
        if max1 == minInf or max2 == minInf or max3 == minInf: max([max1,max2,max3])
        return max3

nums = [5,1]
result = Solution().thirdMax(nums)
print(result)




