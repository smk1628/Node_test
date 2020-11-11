//引入mongoose
const mongoose = require('mongoose')
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
        let stuModel = mongoose.model('studens',studentRule) //用于生成某个集合所对应的模型对象
        //CURD
        //新增操作 -C create
        /*stuModel.create({
            stu_id:'003',
            name:'coco',
            age:16,
            sex:'女',
            hobby:['吃饭','睡觉','逛街'],
            info:'666666666'
        },function (err,data){
            if(!err){
                console.log('数据写入成功!-->',data)
            }else {
                console.log(err)
            }
        })*/

        //查询操作 -R find findOne
        //find()方法返回的是一个数组，若查询结果为空，则返回一个空数组
        /*stuModel.find({name:'coco'},function (err,data){
            if(!err){
                console.log(data);
            }else {
                console.log(err);
            }
        })*/
        //findOne()若有结果返回一个对象，如果结果为空则返回null
        /*stuModel.findOne({name:'cewoco'},function (err,data){
            if(!err){
                console.log(data);
            }else {
                console.log(err);
            }
        })*/

        //更新操作 -U updateOne updateMany
        /*stuModel.updateOne({name:'coco'},{age:6},function (err,data){
            if(!err){
                console.log(data);
            }else {
                console.log(err);
            }
        })*/

        //删除操作 -D deleteOne deleteMany
        /*stuModel.deleteMany({age:18},function (err,data){
            if(!err){
                console.log(data);
            }else {
                console.log(err);
            }
        })*/
    }
})
