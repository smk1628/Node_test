const express = require('express')
const app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended:true}))
app.get('/ajax_get',(request,response)=>{
    response.send('我收到了get请求\n请求信息为：'+JSON.stringify(request.query))
})
app.post('/ajax_post',(request,response)=>{
    response.send('我收到了post请求\n请求信息为：'+JSON.stringify(request.body))
})
app.listen('3000',(err)=>{
    if(!err) console.log('服务器启动成功！\n'+'点击此处测试：http://localhost:3000/jquery_ajax.html')
    else console.log(err)
})