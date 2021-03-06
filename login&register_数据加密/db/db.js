/**
 * 该模块用于连接数据库，且监测其连接状态
 * */
//引入mongoose
const mongoose = require('mongoose')
const DB_NAME = 'test'
const PORT = 27017
const IP = '192.168.1.3'
mongoose.set('useCreateIndex',true) //使用一个新的索引创建器


function connectMongo(callback){
    //连接数据库
    mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`,{
        useNewUrlParser:true, //使用一个新的URL解析器，用于解决一些安全性问题
        useUnifiedTopology: true //使用一个统一的新的拓扑结构
    })
    //绑定数据库连接的监听
    mongoose.connection.on('open',function (err){
        if(err){
            console.log('数据库连接失败！',err)
            callback('connect failed')
        }else {
            console.log('数据库连接成功！')
            callback()
        }
    })
}

module.exports = connectMongo
