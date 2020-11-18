/**
 * 专门用来管理UI页面的路由
 * */
//Router 是一个完整的中间件和路由系统，也可以看成是一个小型的app对象
//引入Router构造函数
const {Router} = require('express')
//引入cookie-parser
const cookieParser = require('cookie-parser')
//引入数据模型
const userModel = require('../models/usersModel')
//创建一个Router实例
const router = new Router()
//使用cookie-parser
router.use(cookieParser())

//引入path模块，Node内置的专门解决UI路由路径问题的库
let {resolve} = require('path')
//重定向根路由
// router.get('/',(request,response)=>{
//     response.redirect('https://www.baidu.com/')
// })
//展示登录页面路由 ---UI路由
router.get('/login',(request,response)=>{
    let url = resolve(__dirname,'../public/login.html')
    response.sendFile(url)
})
//展示注册页面路由 ---UI路由
router.get('/register',(request,response)=>{
    let url = resolve(__dirname,'../public/register.html')
    response.sendFile(url)
})
//展示用户中心页面路由 ---UI路由
router.get(['/user_center','/'],(request,response)=>{
    //1.获取客户端通过cookie携带过来的session编号
    //2.根据session编号匹配session容器
    //3.若匹配上：拿到session容器里的数据去使用
    //4.若未匹配上：驳回到登录页面
    const {_id} = request.session //req携带过来的是cookie：{key:user_id,value:经过加密的session编号}
    if(_id){
        //response.render('user_center',{user_name})
        userModel.findOne({_id:_id},function (err,data){
            if(!err && data){
                response.render('user_center',{user_name:data.name})
            }else response.redirect('http://localhost:3000/login')
        })
    }else{
        response.redirect('http://localhost:3000/login')
    }
})

module.exports = function (){
    return router    //为了迎合中间件理念，中间件应该是一个函数
}
