/**
 * 专门管理登录、注册的业务路由
 * */
//Router 是一个完整的中间件和路由系统，也可以看成是一个小型的app对象
//引入Router构造函数
const {Router} = require('express')
//创建一个Router实例
const router = new Router()
//引入模型对象
const usersModel = require('../models/usersModel')
//校验email表达式
const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
//校验昵称表达式
const nameReg = /[\u4e00-\u9fa5]/gm
//校验密码表达式
const passwordReg = /^[a-zA-z0-9_@#.+&]{6,20}$/
//用于处理用户的登录请求 ---业务路由
router.post('/login',(request,response)=>{
    //获取用户输入
    const {email,password} = request.body
    //console.log(email,password)
    if(!emailReg.test(email)){
        response.send('您的邮箱格式不正确，请重新输入！')
    }else if(!passwordReg.test(password)){
        response.send('您的密码格式不正确，请重新输入！')
    }else {
        usersModel.findOne({email,password},function (err,data){
            if(data){
                response.send(`欢迎${data.name}登录`)
            }else if(err){
                response.send('网络不稳定，请稍后再试！')
            }else {
                response.send('用户名或密码错误，请重新输入')
            }
        })
    }
})
//用于处理用户的注册请求 ---业务路由
router.post('/register',(request,response)=>{
    //console.log(request.body)
    /* {
         email: '1628150422@qq.com',
         name: 'admin',
         password: '123456',
         re_password: '123456'
     }*/
    //获取用户输入
    const {email,name,password,re_password} = request.body

    //使用正则去校验
    if(!emailReg.test(email)){
        response.send('邮箱不合法')
    }else if(!nameReg.test(name)){
        response.send('昵称不合法，必须为中文')
    }else if(!passwordReg.test(password)){
        response.send('密码不合法，必须6-20位')
    }else if(password !== re_password){
        response.send('两次密码不一致')
    }else {
        //去数据库中查询邮箱是否注册过
        usersModel.findOne({email},function (err,data){
            if(data){
                response.send('该邮箱已注册！')
            }else {
                usersModel.create({email,name,password},function (err,data){
                    if(!err) response.send('注册成功！')
                    else response.send('注册失败，稍后重试！')
                })
            }
        })
    }
})
module.exports = router