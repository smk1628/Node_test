const mongoose = require('mongoose')
//操作数据库
const Schema = mongoose.Schema //引入模式对象
//创建约束对象
let studentRule = new Schema({
    stu_id: {
        type:String, //限制学号必须为：字符串
        required:true, //限制学号为必填项
        unique:true //限制学号是唯一的
    },
    name:{
        type:String, //限制姓名必须为：字符串
        required:true //限制姓名为必填项
    },
    age: {
        type:Number, //限制年龄必须为：数字
        required:true //限制年龄为必填项
    },
    sex: {
        type:String, //限制性别必须为：字符串
        required:true //限制性别为必填项
    },
    hobby:[String], //限制爱好只能为数组，数组中的每一项必须为字符串
    info:Schema.Types.Mixed, //接收所有类型
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
module.exports =  mongoose.model('studens',studentRule) //用于生成某个集合所对应的模型对象


