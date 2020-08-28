var thirdMax = function(nums) {
    if(nums.length <3) return Math.max(...nums);
   let max1=max2=max3=-Infinity;
   for(let val of nums){
       if(val > max1){
           max3 = max2;
           max2 = max1;
           max1 = val;
           continue;
       }
       if(val!=max1 && val > max2){
           max3 = max2;
           max2 = val;
           continue;
       }
       if(val!=max2 && val!=max1 && val > max3){
           max3 = val
       }
   }
   console.log(max1,max2,max3)
   if(max1 == -Infinity || max2 == -Infinity || max3 == -Infinity) return Math.max(max1,max2,max3);
   return max3;

};