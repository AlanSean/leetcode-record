var fs = require('fs');

/**
 *生成目录并返回最终生成的目录
 * @param {*} filepath
 * @return { Promise<any> }
 */
function mkdir(filepath) {
    return new Promise( res => {
        let arr = filepath.split('/'),
        dir='';

        for (let i = 0; i < arr.length; i++) {
            if (i >0){
                dir += '/';
            }
            dir += arr[i];
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
        }
        res(dir);
    });
}
/**
 *生成文件
 * @param {*} filepath
 * @param {*} data
 */
function writeFile(filepath,data = ''){
    return new Promise( res => {
        let fileName = filepath.slice(filepath.lastIndexOf('/')+1);

        if (fs.existsSync(filepath)) {
            res({
                result: true,
                name: fileName
            });
        } else {
            fs.writeFile(filepath, data, 'utf8',(err) => {
                if (err) throw err;
                res({
                    result: true,
                    name: fileName
                });
            });
        }
    });
}

/**
 * 复制文件
 * @param {string} from 要复制的文件地址
 * @param {string} to 复制到的目录地址
 */
function copyFile(from,to){
    return new Promise( res => {
        let fileName = to.slice(to.lastIndexOf('/')+1);

        if (fs.existsSync(to)) {
            res({
                result: true,
                name: fileName
            });
        } else {
            fs.copyFile(from,to,(err) => {
                if (err) throw err;
                res({
                    result: true,
                    name: fileName
                });
            });
        }
    });
}
/**
 * 获取html里面的文本
 * @param {string} string html
 * @param {string} key 标签名
 */
function getText(string,key){
    const reg = new RegExp(`<${key}>[\\s\\S+]*</${key}>`,'g'),
        keylength = key.length;

    let result = string.match(reg);

    result = result && result[0].length > keylength*2+5 ? result[0].slice(keylength+2,-(keylength+3)) : '请在html-title或者body里面写上标题和算法题描述';
    return result;
}
module.exports = {
    mkdir,
    getText,
    copyFile,
    writeFile
};