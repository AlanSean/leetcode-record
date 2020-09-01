var fs = require('fs');

/**
 *生成目录并返回最终生成的目录
 * @param {*} filepath
 * @return { Promise }
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
                console.log(dir+'文件夹 创建成功');
            } else {
                console.log(dir+'文件夹 存在已跳过');
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
            console.log(filepath+' 存在已跳过');
        } else {
            fs.writeFile(filepath, data, 'utf8',(err) => {
                if (err) throw err;
                res({
                    result: true,
                    name: fileName
                });
                console.log(filepath+' 创建成功');
            });
        }
    });
}

module.exports = {
    mkdir,
    writeFile
};