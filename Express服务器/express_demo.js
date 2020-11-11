//引入express
const express = require('express')
//1.创建app服务对象
const app = express()
//禁止服务器返回X-Powered-By
app.disable('x-powered-by')
//2.配置路由 ----对请求的url进行分类，服务器根据分类决定交给谁去处理
//一级路由
app.get('/haha',function (request,response){
    response.send("it's haha")
})
//根路由
app.get('/',function (request,response){
    /**
     * 什么样的请求，能交给这个回调函数处理？
     * 1.请求方式必须为GET
     * 2.请求的URI必须为"/"
     * 3.根据路由定义的顺序（代码顺序）依次定义好路由，随后放入一个类似于数组的结构，当有请求时，依次取出匹配。若匹配成功，不再继续匹配
     * PS：路由可以理解为一组组key-value组合，key：请求方式+URI路径，value：后端所处理该请求的回调函数
     * */
    response.send("it's index")
})
app.post('/',function (request,response){
    response.send("it's POST")
})
//3.指定服务器运行端口（绑定监听端口）
app.listen(3000,function (err){
    if(!err) console.log('server success')
    else console.log(err)
})
