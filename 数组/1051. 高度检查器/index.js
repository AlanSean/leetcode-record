//常规排序
var sort = function(heights) {
    let ans = [...heights];
    let cout=0;
    for(let i=1;i<ans.length;i++){
        for(let j=i;j>=0;j--){
            if(ans[j] > ans[i]){
                [ ans[i], ans[j] ]  = [ ans[j], ans[i] ] 
                console.log(ans,j,i);
                i--
            }
        }
    }
    for(let i=0;i<heights.length;i++){
        if(heights[i] !=ans[i]) cout++
    }
    console.log(ans)
};
//桶排序
var bucket  = function(heights) {
    let arr = new Array(101).fill(0);
    heights.forEach( item => {
        console.log(item)
        arr[item]++;
    })
    console.log(arr)
    let count = 0;
    for (let i = 1, j = 0; i < arr.length; i++) {
        while (arr[i]-- > 0) {
            console.log(arr[i],heights[j],i)
            if (heights[j++] != i) count++;
        }
    }
    console.log(count)
    return count;
};