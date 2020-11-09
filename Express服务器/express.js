//引入express
const express = require('express')
//1.创建app服务对象
const app = express()
//2.配置路由 ----对请求的url进行分类，服务器根据分类决定交给谁去处理
app.get('/haha',function (request,response){
    response.send("it's haha")
})
app.get('/',function (request,response){
    /**
     * 什么样的请求，能交给这个回调函数处理？
     * 1.请求方式必须为GET
     * 2.请求的URI必须为"/"
     * PS：路由可以理解为一组组key-value组合，key：请求方式+URI路径，value：后端所处理该请求的回调函数
     * */
    response.send("it's index")
})

//指定服务器运行端口（绑定监听端口）
app.listen(3000,function (err){
    if(!err) console.log('server success')
    else console.log(err)
})