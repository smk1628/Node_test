/**
 * 创建一个可写流
 *      fs.createWriteStream(path[,options])
 *          --path 要写入的文件路径+文件名+文件后缀
 *          --options 配置对象（可选参数）
 *              --flags
 *              --encoding
 *              --fd 文件统一标识符，linux下文件标识符
 *              --mode
 *              --autoClose 自动关闭 ---- 文件， 默认值：true
 *              --emitClose 关闭 ----文件， 默认值：false
 *              --start
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
//ws.close() //如果在node的8版本中，此方法关闭流会造成数据丢失
ws.end() //在node的8版本中，要用end()关闭流
