/**
 * fs.readFile(path[,options],callback)
 *      --path 要读取文件的路径+文件名+后缀
 *      --options 配置对象（可选）
 *      --callback 回调
 *          --err 错误对象
 *          --data 读取出来的数据
 *
 * */

let fs = require('fs')

fs.readFile(__dirname+'/demo.txt',function (err,data){
    if(err) console.log(err)
    else console.log(data.toString()) //data读出来的是Buffer
})