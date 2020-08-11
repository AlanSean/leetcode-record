//拆票
//arr  二维数组
//根据一维数组长度进行组合
function arrayGroup(a){
    return a.reduce((b,c)=>c.reduce(( (ct, cv)=>  ct.concat(b.map(bv=>[].concat(bv,cv)))),[]));
}
// Cmn
// m  一维数组  n 几几组合 
//currentIndex当前下标  choseArr 选择项数组 result 匹配结果
function group(m, n, currentIndex=0, choseArr=[], result=[]){
    let len = m.length;
    if(n+currentIndex>len) return;
    for(let i=currentIndex;i<len;i++){
        let nextIndex = i+1,
            newChoseArr = [...choseArr,m[i]];
        if(n==1){
            result[result.length] = newChoseArr;
            nextIndex<len && group(m,n,nextIndex,choseArr,result);
            break;
        }
        group(m, n - 1, nextIndex, newChoseArr, result);
    }   
    return result;
}
// export function group(arr, size){
//     var allResult = [];
//     var b = function (arr, size, result) {
//         var arrLen = arr.length;
//         if (size > arrLen) {
//             // throw Error('串数比数组长度大');
//             return;
//         }
//         if (size == arrLen) {
//             allResult.push([].concat(result, arr))
//         } else {
//             for (var i = 0 ; i < arrLen; i++) {
//                 var newResult = [].concat(result);
//                 newResult.push(arr[i]);
//                 if (size == 1) {
//                     allResult.push(newResult);
//                 } else {
//                     var newArr = [].concat(arr);
//                     newArr.splice(0, i + 1);
//                     b(newArr, size - 1, newResult);
//                 }
//             }
//         }
//     };
//     b(arr, size, []);
//     return allResult;
// }