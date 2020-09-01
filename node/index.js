var fs = require('fs'),
    npm_config_argv = JSON.parse(process.env.npm_config_argv),
    command = {
        run: npm_config_argv.original[1],
        runPath: process.cwd() //运行目录
    },
    {
        mkdir,
        writeFile
    } = require('./factory');

//获取命令参数
npm_config_argv.original.forEach((item, index) => {
    switch (item) {
        case '-n': //文件名称
            command.mkdir = npm_config_argv.original[index + 1];
            break;
        default:
    }
});


//创建目录
mkdir(command.mkdir).then( res => {
    //创建文件
    writeFile(res+'/index.js');
    writeFile(res+'/index.md');
    writeFile(res+'/index.py','#!/usr/bin/env python');
});
