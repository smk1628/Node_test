const mongoose = require('mongoose')
//操作数据库
const Schema = mongoose.Schema //引入模式对象
//创建约束对象
let citiesRule = new Schema()
//创建模型对象
module.exports =  mongoose.model('cities',citiesRule) //用于生成某个集合所对应的模型对象



