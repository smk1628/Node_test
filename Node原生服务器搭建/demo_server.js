//引入Node内置的http模块
let http = require('http')
//引入Node内置模块，用于解析key=value&key=value...这种形式的字符串为js中的对象
/**
 * 备注：
 * 形如key=value&key=value... 的编码形式：urlencoded编码形式
 * 请求地址里携带urlencoded编码形式的参数，叫做：查询字符串参数
 * */
//引入的qs是一个对象，该对象身上有很多有用的方法，最具代表性的：parse()
let qs = require('querystring')
//创建服务对象
let server = http.createServer(function (request,response){
    /**
     * request 请求对象，包含客户端给服务器的数据
     * response 响应对象，包含服务器要返回给客户端的数据
     * */
    //获取客户端携带过来的urlencoded编码形式的参数
    let params = request.url.split('?')[1] //name=zhangsan&age=18
    let objParams = qs.parse(params) //{name:'zhangsan',age:18}
    console.log(objParams)
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('服务器请求成功！')
})

//指定服务器运行端口（绑定监听端口）
server.listen(3000,function (err){
    if(!err) console.log('server success!')
    else console.log(err)
})



