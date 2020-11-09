//引入数据库连接模块
const db = require('./db/db')
//引入studentModel
const stuModel = require('./models/studentModel')
//更新操作
db(function (err){
    if(err) console.log(err)
    else {
        stuModel.updateOne({name:'coco'},{age:6},function (err,data){
            if(!err){
                console.log(data);
            }else {
                console.log(err);
            }
        })
    }
})


