/**
 * fs.createReadStream(path[,options])
 *      --path
 *      --options
 *          --flags
 *          --encoding
 *          --fd
 *          --mode
 *          --autoClose
 *          --emitClose
 *          --start 起始偏移量
 *          --end 结束偏移量
 *          --highWaterMark 控制每次读取数据的大小，默认值是：64*1024B（64KB）根据服务器内存来设置
 *
 * */

let {createReadStream} = require('fs')

// //创建一个可读流
// let rs = createReadStream(__dirname+'/demo.txt')
//
// //监测流的状态（只要用到了流，就必须监测流的状态）
// rs.on('open', function (){
//     console.log('可读流打开了');
// })
//
// rs.on('close', function (){
//     console.log('可读流关闭了');
// })
//
// //给可读流绑定一个data事件，就会触发可读流自动读取内容
// rs.on('data',function (data){
//     console.log(data) //如果内容过大，默认每次读取64KB的内容 Buffer的实例的length属性，是表示该Buffer实例占用内存空间的大小
// })

//创建一个可读流
let rs = createReadStream(__dirname+'/demo.txt')
//创建一个可写流
let ws = require('fs').createWriteStream(__dirname+'/ReadFile2.txt')
//监测流的状态（只要用到了流，就必须监测流的状态）
rs.on('open', function (){
    console.log('可读流打开了');
})
ws.on('open',function (){
    console.log('可写流打开了')
})
ws.on('close',function (){
    console.log('可写流关闭了')
})
rs.on('close', function (){
    console.log('可读流关闭了');
    ws.close()
})

//给可读流绑定一个data事件，就会触发可读流自动读取内容
rs.on('data',function (data){
    console.log(data) //如果内容过大，默认每次读取64KB的内容 Buffer的实例的length属性，是表示该Buffer实例占用内存空间的大小
    ws.write(data)
})
