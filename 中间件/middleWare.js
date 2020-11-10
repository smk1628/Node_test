const express = require('express')
//创建服务器
const app = express()

/**
 * 第一种方式，全局使用中间件，所有请求都要经过它
 * */
/*app.use((requset, response, next) => {
    //response.send('我是中间件')
    next() //放行，允许请求通过
})*/
/**
 * 第二种方式，创建中间件函数，只有使用中间件函数的路由的请求才会经过中间件
 * */
/*function guardPic(requset,response,next){
    response.send('我是中间件')
}
app.get('/middle',guardPic,function (requset,response){
    response.send('这是二级路由')
})*/
/**
 * 使用第三方中间件
 * */
/*const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.post('/test',(request,response)=>{
    console.log(request.body) //{ user: 'admin', pwd: '123456' } 借助第三方中间件获取post中body内容
    response.send('test')
})*/


app.get('/',function (requset,response){
    response.send('这是根路由')
})
//监听端口
app.listen('3000',function (err){
    if(!err) console.log('server success');
    else console.log(err);
})