var fs = require('fs'),
    {resolve} = require('path'),
    npm_config_argv = process.env.npm_config_argv && JSON.parse(process.env.npm_config_argv),
    mdData = fs.readFileSync(resolve(__dirname,'../test/index.html'),'utf8'),
    {
        mkdir,
        writeFile,
        copyFile,
        getText
    } = require('./factory'),
    command = {
        run: npm_config_argv.original[1],
        runPath: process.cwd(), //运行目录
        mkdir: getText(mdData,'title')
    };


//创建目录
mkdir(command.mkdir).then(res => {
    //创建文件
    writeFile(res + '/index.md',getText(mdData,'body'));
    copyFile(resolve(__dirname,'../test/index.js'),res + '/index.js');
    copyFile(resolve(__dirname,'../test/index.py'),res + '/index.py');
});
