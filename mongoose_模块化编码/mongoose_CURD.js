//引入mongoose
const mongoose = require('mongoose')
//引入studentModel
const stuModel = require('./models/studentModel')
mongoose.set('useCreateIndex',true) //使用一个新的索引创建器
//连接数据库
mongoose.connect('mongodb://192.168.1.3:27017/test',{
    useNewUrlParser:true, //使用一个新的URL解析器，用于解决一些安全性问题
    useUnifiedTopology: true //使用一个统一的新的拓扑结构
})
//绑定数据库连接的监听
mongoose.connection.on('open',function (err){
    if(err){
        console.log('数据库连接失败！',err)
    }else {
        console.log('数据库连接成功！');
        //更新操作 -U updateOne updateMany
        stuModel.updateOne({name:'coco'},{age:6},function (err,data){
            if(!err){
                console.log(data);
            }else {
                console.log(err);
            }
        })
    }
})