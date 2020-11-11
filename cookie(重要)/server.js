const express = require('express')
let cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
//会话cookie，关闭浏览器即刻消失
//普通cookie
app.get('/demo1',function (request,response){
    let obj = {name:'Tom',address:'china'}
    response.cookie('Tom',JSON.stringify(obj)) //给浏览器种下一个会话cookie
    response.send('我是demo1，我给你了一个cookie')
})
//持久化cookie
app.get('/demo2',function (request,response){
    let obj = {name:'Tom',address:'china'}
    response.cookie('Tom',JSON.stringify(obj),{maxAge:1000*60}) //给浏览器种下一个会话cookie 1分钟后到期
    response.send('我是demo2，我给你了一个持久化cookie')
})
//读取cookie，express中读取客户端携带过来的cookie要借助名为cookie-parser的中间件
app.get('/demo3',function (request,response){
    console.log(request.cookies)
    const {Tom} = request.cookies
    console.log(JSON.parse(Tom))
    response.send('我是demo3,我读取了客户端携带来的cookie，去控制台看看吧')
})
//删除cookie
app.get('/demo4',function (request,response){
    //response.cookie('Tom','',{maxAge:0}) //给浏览器种下一个会话cookie 立即到期（删除一个key为Tom的cookie）
    response.clearCookie('Tom')
    response.send('我是demo4，我删除你所保存的key为Tom的cookie')
})
app.listen('3000',function (err){
    if(!err) console.log('server success');
    else console.log(err);
})