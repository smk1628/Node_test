/**
 * 创建一个可写流
 *      fs.createWriteStream(path[,options])
 *          --path 要写入的文件路径+文件名+文件后缀
 *          --options 配置对象（可选参数）
 *
 * */

let fs = require('fs')

//创建一个可写流
let ws = fs.createWriteStream(__dirname+'/demo2.txt')

//监测流的状态（只要用到了流，就必须监测流的状态）
ws.on('open', function (){
    console.log('可写流打开了');
})

ws.on('close', function (){
    console.log('可写流关闭了');
})

//使用可写流写入数据
ws.write('hello node\n')
ws.write('hello node')