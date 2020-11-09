//引入mongoose
const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://192.168.1.3:27017/test',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
//绑定数据库连接的监听
mongoose.connection.on('open',function (err){
    if(err){
        console.log('数据库连接失败！',err)
    }else {
        console.log('数据库连接成功！');
        //操作数据库
        const Schema = mongoose.Schema
        //设置约束
        let studentRule = new Schema({
            stu_id:'',
            name:'',
            age:'',
            sex:'',
            hobby:'',
            info:'',
            date:'',
            enable_flag:''
        })

    }
})