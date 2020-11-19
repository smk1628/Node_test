const express = require('express')
const app = express()
app.use(express.static(__dirname+'/public'))
app.get('/get_code',(request,response)=>{
    setTimeout(()=>{
        let authCode = Math.floor(Math.random()*8999+1000)
        response.send(authCode.toString())
        console.log('我已发送验证码：'+authCode)
    },3000)
})
app.listen('3000',(err)=>{
    if(!err) console.log('服务器启动成功！\n'+'点击此处测试：http://localhost:3000/verifiCode.html')
    else console.log(err)
})