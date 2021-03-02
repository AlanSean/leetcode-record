/*
 * @: Alan
 * @Date: 2020-08-31 14:22:33
 * @LastEditTime: 2020-10-14 12:01:34
 * @LastEditors: Alan
 * @Description: In User Settings Edit
 * @FilePath: \leetcode-record\设计模式\单例模式\index.js
 */

/**
 * 单例模式-惰性单例
 *
 */
let Single = (function () {
    var instance = null;

    //初始化
    function Init(name) {
        this.name = name;
    }
    return function (name) {
        if (!instance) instance = new Init(name);
        return instance;
    };
})();
