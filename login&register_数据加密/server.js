//引入express插件
const express = require('express')
//创建app应用对象
const app = express()
//禁止服务器返回X-Powered-By
app.disable(('x-powered-by'))
//暴露静态资源
app.use(express.static(__dirname+'/public'))
//让你的服务器知道你在用哪个模板引擎  ----配置模板引擎
app.set('view engine','ejs')
//让你的服务器知道你的模板在哪个陌路下  ----配置模板目录
app.set('views','./views')
//使用内置中间件，用于解析post请求的urlencoded
app.use(express.urlencoded({extended:true}))
//引入db模块
const db = require('./db/db')
//引入UI路由器
const UIRouter = require('./router/UIRouter')
//引入业务路由器
const Login_registerRouter = require('./router/Login_registerRouter')
/**
 * 如下代码配置express中操作session
 **/
//引入express-session，用于在express中简化session操作
const session = require('express-session')
//引入connect-mongo，用于做session持久化
const MongoStore = require('connect-mongo')(session)

app.use(session({
    name:'user_id', //设置cookie的name，默认值是：connect.sid
    secret:'password', //参与加密的字符串（又称签名）
    saveUninitialized:false, //是否在存储内容之前创建session会话
    resave:true, //是否在每次请求时，强制重新保存session，即使他们没有变化
    store:new MongoStore({
        url:'mongodb://192.168.1.3:27017/session_container',
        touchAfter:24*3600 //修改频率，24小时内只往数据库存一次
    }),
    cookie:{
        httpOnly:true, //开启后前端无法通过js操作cookie
        maxAge:1000*30 //设置cookie的过期时间，cookie的key和value均不在此处配置
    }
}))
//连接数据库
db((err)=>{
    if(!err){
        //使用UIRouter路由
        app.use(UIRouter())
        //使用Login_registerRouter路由
        app.use(Login_registerRouter())
        //监听端口
        app.listen('3000',function (err){
            if(!err) console.log('server success');
            else console.log(err);
        })
    }else console.log(err)
})

