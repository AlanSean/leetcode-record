    一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
    示例 1:

    输入: [0,1,3]
    输出: 2
    示例 2:

    输入: [0,1,2,3,4,5,6,7,9]
    输出: 8
     

    限制：

    1 <= 数组长度 <= 10000

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



    ```

//常规遍历法
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var left = 0,
    right = nums.length-1;
    for(left;left<=right;left++){
        if(left !== nums[left])break;
    }
    console.log(left)
};

//二分法
/**
 * @param {number[]} nums
 * @return {number}
 */
var dichotomy = function(nums) {
    var left = 0,
    right = nums.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        //如果相等 说明值在右边所以 left = 中间值+1
        if(mid == nums[mid]){
            left = mid+1;
        }
        //不相等并且小于  说明值在左边 所以right = 中间值-1
        if (mid !== nums[mid] && mid < nums[mid]) {
            right = mid - 1;
        }
        console.log(left)
    }
   
};

missingNumber([0,1,2,3,4,5,6,7,9]);

    ```