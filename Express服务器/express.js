/**
 * express搭建简易的服务器，要求能手写出来
 * */

//引入express
const express = require('express')
//1.创建app服务对象
const app = express()
//2.配置路由
//根路由
app.get('/',function (request,response){
    response.send("it's index")
})
//3.指定服务器运行端口（绑定监听端口）
app.listen(3000,function (err){
    if(!err) console.log('server success')
    else console.log(err)
})
