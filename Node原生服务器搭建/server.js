/**
 * 不借助第三方库，搭建Node原生服务器,重点 要求能手写
 * */
//引入Node内置的http模块
let http = require('http')
//创建服务对象
let server = http.createServer(function (request,response){
    /**
     * request 请求对象，包含客户端给服务器的数据
     * response 响应对象，包含服务器要返回给客户端的数据
     * */
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('服务器请求成功！')
})

//指定服务器运行端口（绑定监听端口）
server.listen(3000,function (err){
    if(!err) console.log('server success!')
    else console.log(err)
})



