const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true})) //request.body
app.use(express.static(__dirname+'/public'))
app.get('/ajax_get',function (request,response){
    console.log(request.query)
    response.send('get')
})
app.post('/ajax_post',function (request,response){
    console.log(request.body)
    response.send('post')
})
app.listen('3000',(err)=>{
    if(!err) {
        console.log('server success\n'+
                    '点击这里测试get：http://localhost:3000/ajax_get.html\n'+
                    '点击这里测试post：http://localhost:3000/ajax_post.html'
        );
    }
    else console.log(err);
})