const express = require('express')
const app = express()
app.use(express.static(__dirname+'/public'))
app.get('/json_get',function (req,res){
    let personArr = [{name:'peiqi',age:7},{name:'kebi',age:18}]
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342')
    res.send(personArr)
})
app.listen(3000,function (err){
    if(!err) console.log('server success');
    else console.log(err);
})