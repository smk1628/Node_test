/**
 * 1.异步文件写入
 *      fs.writeFile(file,data[,options],callback)
 *              --file 要写入的文件路径+文件名+后缀
 *              --data 要写入的数据
 *              --options 可选参数
 *                  --encoding 设置文件的编码方式，默认utf8
 *                  --mode 设置文件的操作权限，默认值是0o666（0o222+0o444）可读写
 *                      --0o111 文件可执行
 *                      --0o222 文件可写入
 *                      --0o444 文件可读取
 *                  --flag 打开文件要执行的操作，默认值是'w'
 *                      --a 追加
 *                      --w 写入
 *              --callback 回掉函数
 *                  --err 错误对象
 *  在Node中有这样一个原则：错误优先
 * */

//引入内置的fs模块
let fs = require('fs')

//调用writeFile方法
// fs.writeFile('./demo.txt','hello node',(err)=>{
//     if(err){
//         console.log('文件写入失败',err);
//     }else{
//
//         console.log('文件写入成功！');
//     }
// })
fs.writeFile(__dirname+'/demo.txt','hello node',{mode:0o666},(err)=>{
    if(err){
        console.log('文件写入失败',err);
    }else{

        console.log('文件写入成功！');
    }
})
