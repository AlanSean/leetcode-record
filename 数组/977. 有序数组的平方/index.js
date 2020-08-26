/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let n =A.length-1,
        j=A.length-1,
        ans=[],
        i=0;
    while(i<=n){
        if(A[i]+A[n] <0){
            ans[j--] = A[i++]**2;
        } else {
            ans[j--] = A[n--]**2;
        }
    }
    return ans
};