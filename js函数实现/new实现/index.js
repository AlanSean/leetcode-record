/** new实现
 * 原理:
 * 1. 获取第一个参数(构造函数名) Func = [].shfit.call(arguments) 使用数组的方法操作类数组
 * 2. 用新对象继承 这个构造函数的原型链 obj = Object.create(Func.prototype)
 * 3. 把Func的this指向到obj   newFunc = Func.apply(obj,arguments)
 */
function _new () {

    var Func = [].shift.call(arguments),
        obj = Object.create(Func.prototype),
        newFunc = Func.apply(obj,arguments);

    return typeof newFunc === 'object' ? newFunc : obj;
}