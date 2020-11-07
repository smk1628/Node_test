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

// fs.readFile(__dirname+'/demo.txt',function (err,data){
//     if(err) console.log(err)
//     else console.log(data) //读出来的data是Buffer （为什么是Buffer？用户储存的不一定是纯文本）
// })

fs.readFile(__dirname+'/demo.txt',function (err,data){
    if(err) console.log(err)
    else console.log(data) //读出来的data是Buffer （为什么是Buffer？用户储存的不一定是纯文本）
    fs.writeFile(__dirname+'/ReadFile.txt',data,function (err){
        if(err) console.log(err)
        else console.log('文件读取成功')
    })
})