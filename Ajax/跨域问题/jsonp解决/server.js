const express = require('express')
const app = express()
app.use(express.static(__dirname+'/public'))
app.get('/json_get',function (req,res){
    let {callback} = req.query
    let personArr = [{name:'peiqi',age:7},{name:'kebi',age:18}]
    res.send(`${callback}(${JSON.stringify(personArr)})`)
})
app.listen(3000,function (err){
    if(!err) console.log('server success');
    else console.log(err);
})