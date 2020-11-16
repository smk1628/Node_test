const mongoose = require('mongoose')
//操作数据库
const Schema = mongoose.Schema //引入模式对象
//创建约束对象
let usersRule = new Schema({
    email: {
        type:String, //限制邮箱必须为：字符串
        required:true, //限制邮箱为必填项
        unique:true //限制邮箱是唯一的
    },
    name:{
        type:String, //限制姓名必须为：字符串
        required:true //限制姓名为必填项
    },
    password: {
        type:Number, //限制密码必须为：数字
        required:true //限制密码为必填项
    },
    date: {
        type:Date, //设置类型必须为时间
        default:Date.now() //设置默认值为当前时间
    },
    enable_flag: {
        type:String, //设置类型必须为字符串
        default: 'Y' //设置默认值为Y
    }
})
//创建模型对象
module.exports =  mongoose.model('users',usersRule) //用于生成某个集合所对应的模型对象



