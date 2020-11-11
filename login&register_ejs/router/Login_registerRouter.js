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
    //收集错误信息
    let userMsg = {}
    //console.log(email,password)
    if(!emailReg.test(email)){
        //response.send('您的邮箱格式不正确，请重新输入！')
        userMsg.emailErr = '您的邮箱格式不正确，请重新输入！'
    }
    if(!passwordReg.test(password)){
        //response.send('您的密码格式不正确，请重新输入！')
        userMsg.passwordErr = '您的密码格式不正确，请重新输入！'
    }
    if(JSON.stringify(userMsg) !== '{}'){
        response.render('login',{userMsg})
        return
    }
    usersModel.findOne({email,password},function (err,data){
        if(data){
            response.send(`欢迎${data.name}登录`)
        }else if(err){
            //response.send('网络不稳定，请稍后再试！')
            userMsg.netErr = '当前网络不稳定，请稍后再试！'
            response.render('login',{userMsg})
        }else {
            //response.send('用户名或密码错误，请重新输入')
            userMsg.loginErr = '用户名或密码错误，请重新输入'
            response.render('login',{userMsg})
        }
    })
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
    //收集错误信息
    let userMsg = {}
    //使用正则去校验
    if(!emailReg.test(email)){
        //response.send('邮箱不合法')
        userMsg.emailErr = '邮箱不合法'
    }
    if(!nameReg.test(name)){
        //response.send('昵称不合法，必须为中文')
        userMsg.nameErr = '昵称不合法，必须为中文'
    }
    if(!passwordReg.test(password)){
        //response.send('密码不合法，必须6-20位')
        userMsg.passwordErr = '密码不合法，必须6-20位'
    }
    if(password !== re_password){
        //response.send('两次密码不一致')
        userMsg.re_passwordErr = '两次密码不一致'
    }
    if(JSON.stringify(userMsg) !== '{}'){
        //console.log(userMsg)
        response.render('register',{userMsg})
        return
    }
    //去数据库中查询邮箱是否注册过
    usersModel.findOne({email},function (err,data){
        if(data){
            //response.send('该邮箱已注册！')
            userMsg.emailErr = '该邮箱已注册！'
            response.render('register',{userMsg})
            return
        }
        usersModel.create({email,name,password},function (err,data){
            if(!err){
                console.log(`邮箱为${email}的用户注册成功！`)
                //response.redirect('/login')
                response.render('login',{userMsg:{email,password}})
            }
            else{
                //response.send('注册失败，稍后重试！')
                userMsg.netErr = '当前网络不稳定，稍后重试！'
                response.render('register',{userMsg})
            }
        })
    })
})
module.exports = function (){
    return router    //为了迎合中间件理念，中间件应该是一个函数
}