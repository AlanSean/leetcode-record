import mixedPass from './mixedPass.js';
//拆票
//arr 
//根据一维数组长度进行组合
/**
 * 
 * @param { any[][] } a   二维数组
 * @returns { any[][] } 组合好的二维数组 并且长度都为 a.length
 */
function arrayGroup(a){
    if(a.length ==1) return a;
    return a.reduce((b,c)=>c.reduce(( (ct, cv)=>  ct.concat(b.map(bv=>[].concat(bv,cv)))),[]));
}

// Cmn
// 这个性能好
/**
 * m
 * @param {Array} m 一维数组
 * @param {Number} n 几个一组
 * @param { Number } currentIndex 当前下标
 * @param {any[]} choseArr  选择项数组 
 * @param {any[][]} result 匹配结果
 * @returns {any[][]} sum 注数  max每张票的最大奖金和 组合好的二维数组并且长度都为 n
 */
function cmn(m, n, currentIndex=0, choseArr=[], result=[]){
    let len = m.length;
    if(n-0+currentIndex>len) return;
    for(let i=currentIndex;i<len;i++){
        let nextIndex = i+1,
            newChoseArr = [...choseArr,m[i]];
        if(n==1){
            result[result.length] = newChoseArr;
            nextIndex<len && cmn(m,n,nextIndex,choseArr,result);
            break;
        }
        cmn(m, n - 1, nextIndex, newChoseArr, result);
    }  
    return result;
}

//拆票
 /**
 * 
 * @param { Map } playData 赛事 Map 结构
 * @param { String[] } payTypeText 选择的玩法
 * @returns { Object } sum 注数  max每张票的最大奖金和
 */
function openTicket(playData,payTypeText){
    if(payTypeText.length==0) return {sum:0,max:0};
    const size = playData.size,
        keys = [
            'odds_base',
            'odds_handicap',
            'odds_point',
            'odds_goals',
            'odds_half_whole',
        ];
    let arr = [],
        max=0,//总奖金
        max1=0,//单票奖金
        max2=0,//单注奖金
        count=0,//总注数
        count1=0,//单票注数
        count2=0;//单组合注数 比如赛事1 选择了3项 赛事2选择了2项 那么2串1就是6注

    //转化成 二维数组
    [...playData.values()].forEach( item => {
        arr[arr.length]=[];
        for(let o=0;o<keys.length;o++){
            let str = keys[o],val = item[str];
            if(val.size > 0){
                arr[arr.length-1].push({
                    id: item.id,
                    val: val
                })
            }
        }
    });

    arrayGroup(arr).forEach( item => {
        payTypeText.forEach( payType => {
            max1=0;
            count1=0;
            if(payType == '单关'){
                item.forEach( groups => {
                    count1+=groups.val.size;
                    /**
                     * @param {any} group
                     */
                    groups.val.forEach( group => {
                        max1+=Number(group);
                    });
                });
            } else{
                //判断是否是混合过关
                //m 串 n
                let [chuan,n] = payType.split('串');
                let isMixedPass = Number(n) != 1;
                if(isMixedPass) {
                    const mp = mixedPass[size][payType];
                    for(let i=0;i<mp.length;i++){
                        if(mp[i] == 0) continue;
                        cmn(item,i+1).forEach( groups => {
                            max2=1;
                            count2=1;
                            groups.forEach(group => {
                                 max2*= Math.max(...group.val.values());
                                 count2*= group.val.size;
                            });
                            max1+=max2*mp[i];
                            count1+=count2*mp[i];
                        })
                    }
                } else {
                    cmn(item,Number(chuan)).forEach( groups => {
                        max2=1;
                        count2=1;
                        groups.forEach(group => {
                             max2*= Math.max(...group.val.values());
                             count2*= group.val.size;
                        });
                        max1+=max2;
                        count1+=count2;
                    }) 
                }
                  
            }
            max+=max1;
            count+=count1;
        })
    });
    return {
        sum: count,
        max: max
    }
}
//玩法组合
// arr  一维数组  size 几几组合 
//性能 较差
// function cmn(arr, size){
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



export  { 
    mixedPass,
    arrayGroup,
    cmn,
    openTicket
};
