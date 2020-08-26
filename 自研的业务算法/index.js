export { default as passTypeMap } from './passTypeMap.js';
import mixedPass from './mixedPass.js';
//拆票思路版
// function arrayGroup1(arr){
//     let arrs = [arr[0]]; //将二维数组 第一个放到新数组里 作为进行匹配的基础项
//     let i2=1;
//     while(i2 < arr.length){
            //
//         arrs.forEach( (item,index) => { 
//             let a = [];
//             ([].concat(item)).forEach( v => {
//                 arr[i2].forEach( s=> {
//                     a.push([].concat(v,s));
//                 })
//             });
//             arrs[0] = a;
//         })
//         i2++;
//     }
//     return arrs[0]
// }
//拆票精简版
//arr 
//根据一维数组长度进行组合
/**
 * 
 * @param { any[][] } a   二维数组 [[玩法1，玩法2，玩法3]]
 * @returns { any[][] } 组合好的二维数组 并且长度都为 a.length  [ 不同赛事间的组合1,不同赛事间的组合2 ]
 */
function arrayGroup(a){
    if(a.length ==1) return a;
    return a.reduce((b,c)=>c.reduce(( (ct, cv)=>  ct.concat(b.map(bv=>[].concat(bv,cv)))),[]));
}

// Cmn
// 
//currentIndex当前下标  choseArr 选择项数组 result 匹配结果
// 这个性能好
 /**
 * 
 * @param { [] } m   必传 一维数组    [3,3,3,3,3]
 * @param { number } n 必传 几个元素进行组合 例如 2串1  传入 2
 * @param { number } currentIndex 当前下标 初始传入0
 * @param { any[] } choseArr 上次组合后的数组  初始为 []
 * @param { any[] } result 当前组合后的数组  初始为 []
 * @returns { any[][]} result 最终组合后的结果为二维数组 其中子元素长度为 n
 */
//
function cmn(m, n, currentIndex=0, choseArr=[], result=[]){
    let len = m.length;
    //-0是为了进行隐式转换成数字类型
    if(n-0+currentIndex>len) return;


    for(let i=currentIndex;i<len;i++){

        let nextIndex = i+1,
            newChoseArr = [...choseArr,m[i]];// [].concat(choseArr,m[i])
        // n=1时说明组合只剩最后一项 只需要把 nextIndex到len的值全部依次进行组合 并且加入到 result集合中
        if(n==1){

            result[result.length] = newChoseArr;
            nextIndex<len && cmn(m,n,nextIndex,choseArr,result);
            break;
            
        }
        //不等于1时  说明组合数不够 回调将下一个值加入 choseArr组合  
        cmn(m, n - 1, nextIndex, newChoseArr, result);
    }  
    return result;
}
//奖金 4舍5入
function bonusPump(bonus){
    if(parseInt(bonus) == bonus) return bonus;

    const bonusStr = String(parseInt(bonus*1000)),
        len = bonusStr.length,
    bonusThreeDecimals = bonusStr[len-1],
    bonusTwoDecimals =  bonusStr[len-2];
    if(/[0-4]{1}/.test(bonusThreeDecimals)){
        return Math.floor(bonus*10*10)/100
    }
    if(/[6-9]{1}/.test(bonusThreeDecimals)){
        return Math.round(bonus*10*10)/100
    }
    if(bonusThreeDecimals == 5){
        if((bonusTwoDecimals-0)%2 != 0){
            return Math.round(bonus*10*10)/100
        }
        return Math.floor(bonus*10*10)/100
    }
    return Math.floor(bonus*10*10)/100
}

 /**
 * 
 * @param { Map } playData 赛事 Map 结构
 * @param { String[] } payTypeText 选择的玩法
 * @param { number } type  1竞彩足球 2竞彩篮球
 * @returns { sum:Number,bonus:Number } sum 注数  bonus每张票的最大奖金和
 */
function openTicket(playData,payTypeText,type = 1){
    if(payTypeText.length==0) return {sum:0,bonus:0};
    const size = playData.size,
        keys = type == 1 ? footballGames : basketballGames;
    let arr = [],
        bonus=0,//总奖金
        bonus1=0,//单票奖金
        bonus2=0,//单注奖金
        stake=0,//总注数
        stake1=0,//单票注数
        isStakeMax = false,//单票是否超过10000注
        stake2=0;//单组合注数 比如赛事1 选择了3项 赛事2选择了2项 那么2串1就是6注

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
            bonus1=0;
            stake1=0;
            if(payType == '单关'){
                item.forEach( groups => {
                    stake1+=groups.val.size;
                    groups.val.forEach( group => {
                        bonus1+=Number(group)*2;
                    });
                });
                //单场投注，单注最高奖金限额10万元；
                if(bonus1>100000) bonus1 = 100000;
            } else{
                //判断是否是混合过关
                //m 串 n
                let [chuan,n] = payType.split('串');
                let isMixedPass = n != 1;
                if(isMixedPass) {
                    const mp = mixedPass[chuan][payType];
                    for(let i=0;i<mp.length;i++){
                        if(mp[i] == 0) continue;
                        cmn(item,i+1).forEach( groups => {
                            bonus2=2;
                            stake2=1;
                            groups.forEach(group => {
                                 bonus2*= Math.max(...group.val.values());
                                 stake2*= group.val.size;
                            });
                            if(/[2-3]/.test(i+1) && bonus2 > 200000)  bonus2 = 200000;
                            if(/[4-5]/.test(i+1) && bonus2 > 500000)  bonus2 = 500000;
                            if(i+1 >=6 && bonus2 > 1000000)  bonus2 = 1000000;
                            bonus1+=bonusPump(bonus2);
                            
                            stake1+=stake2;
                        })
                    }
                } else {
                    cmn(item,chuan).forEach( groups => {
                        bonus2=2;
                        stake2=1;
                        groups.forEach(group => {
                             bonus2*= Math.max(...group.val.values());
                             stake2*= group.val.size;
                        });
                        if(/[2-3]/.test(chuan) && bonus2 > 200000)  bonus2 = 200000;
                        if(/[4-5]/.test(chuan) && bonus2 > 500000)  bonus2 = 500000;
                        if(chuan >=6 && bonus2 > 1000000)  bonus2 = 1000000;
                        bonus1+=bonusPump(bonus2);
                        stake1+=stake2;
                    });
                    
                }
                  
            }
            bonus+=bonus1;
            stake+=stake1;
            //单张彩票最大投注金额不能超过人民币20000元也就是1万注
            if(stake1 > 10000 && !isStakeMax) isStakeMax = true;
        })
    });
    return {
        isStakeMax: isStakeMax, //单票是否超过10000注
        sum: stake,
        bonus: bonus//奖金基础是2元
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
