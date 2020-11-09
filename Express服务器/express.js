//引入express
const express = require('express')
//1.创建app服务对象
const app = express()
//2.配置路由 ----对请求的url进行分类，服务器根据分类决定交给谁去处理
app.get('/haha',function (request,response){
    response.send("it's haha")
})
app.get('/',function (request,response){
    response.send("it's index")
})

//指定服务器运行端口（绑定监听端口）
app.listen(3000,function (err){
    if(!err) console.log('server success')
    else console.log(err)
})