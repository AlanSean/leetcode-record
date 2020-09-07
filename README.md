# 目录
* [数组](#数组)
* [链表](#链表)

# 现有功能

   运行命令 `npm run rootc` 会根据 html的title,body标签进行生成markdown的文件名和说明

   1. html的title 根据/来划分目录

    比如:链表/19.23423 会在本地生成

    链表
    |-------19.23423
    |----------index.md 根据test文件夹下html的title和body生成内容
    |----------index.js 复制的test文件夹下的js文件
    |----------index.py 复制的test文件夹下的py文件

### 未来功能
    
    有空会用node开发自动生成目录和把`js py`文件的代码写入markdown的功能
