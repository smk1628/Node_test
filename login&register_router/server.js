//引入express插件
const express = require('express')
//创建app应用对象
const app = express()
//禁止服务器返回X-Powered-By
app.disable(('x-powered-by'))
//暴露静态资源
app.use(express.static(__dirname+'/public'))
//使用内置中间件，用于解析post请求的urlencoded
app.use(express.urlencoded({extended:true}))
//引入db模块
const db = require('./db/db')
//引入UI路由器
const UIRouter = require('./router/UIRouter')
//引入业务路由器
const Login_registerRouter = require('./router/Login_registerRouter')
//连接数据库
db((err)=>{
    if(!err){
        //使用UIRouter路由
        app.use(UIRouter)
        //使用Login_registerRouter路由
        app.use(Login_registerRouter)
        //监听端口
        app.listen('3000',function (err){
            if(!err) console.log('server success');
            else console.log(err);
        })
    }else console.log(err)
})
