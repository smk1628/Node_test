const express = require('express')
let app = express()
/**
 * request和response都有什么API
 * 1.request对象：
 *      request.query 获取查询字符串参数（query参数），拿到的是一个对象
 *      request.params 获取get请求参数路由的参数，拿到的是一个对象
 *      request.body 获取post请求体参数，拿到的是一个对象（不可以直接用，要借助一个中间件）
 *      request.get(xxxx) 获取请求头中指定key对应的value
 *
 * 2.response对象：
 *      response.send() 给浏览器做出一个响应
 *      response.end() 给浏览器做出一个响应（不会自动追加响应头）
 *      response.download() 告诉浏览器下载一个文件
 *      response.sendFile() 给浏览器发送一个文件 备注：必须传递一个绝对路径（__diename+'/xxxx.xx'）
 *      response.redirect() 重定向到一个新的地址
 *      response.set(header,value) 自定义响应头内容
 *      response.get() 获取响应头指定key对应的value
 *      res.status(code) 设置响应状态码
 * */
//根路由
/*app.get('/',function (requset,response){
    response.send('get')
    console.log(requset.query);
    console.log(requset.get('Host'));
    console.log(requset.get('Referer'));
})*/
//参数路由
/*
app.get('/:id',function (request,response){
    //console.log(request.params);
    let {id} = request.params
    response.send(`get_id:${id}`)
})
*/

app.get('/',function (request,response){
    response.download('./route.js')
})



//监听端口
app.listen('3000',function (err){
    if(!err) console.log('server success');
        else console.log(err)
})