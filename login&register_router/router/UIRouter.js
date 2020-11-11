/**
 * 专门用来管理UI页面的路由
 * */
//Router 是一个完整的中间件和路由系统，也可以看成是一个小型的app对象
//引入Router构造函数
const {Router} = require('express')
//创建一个Router实例
const router = new Router()
//引入path模块，Node内置的专门解决UI路由路径问题的库
let {resolve} = require('path')
//重定向根路由
router.get('/',(request,response)=>{
    response.redirect('https://www.baidu.com/')
})
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

module.exports = router