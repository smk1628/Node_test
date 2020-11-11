const express = require('express')
const app = express()
//让你的服务器知道你在用哪个模板引擎  ----配置模板引擎
app.set('view engine','ejs')
//让你的服务器知道你的模板在哪个陌路下  ----配置模板目录
app.set('views','./views')
app.get('/show',function (request,response){
    let personArr = [
        {name:'peiqi',age:4},
        {name:'suxi',age:5},
        {name:'qiaozhi',age:3},
        {name:'peideluo',age:6}
    ]
    response.render('person',{persons:personArr})
})
app.listen('3000',function (err){
    if(!err) console.log('server success');
    else console.log(err);
})
