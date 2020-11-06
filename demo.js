/**
 * 1.node中任何一个模块（js文件）都被一个外层函数所包裹
 * 输出node的外层函数 function (exports, require, module, __filename, __dirname) {}
 *
 * exports 用于支持CommonJs模块化规范的暴露语法
 * require 用于支持CommonJs模块化规范的引入语法
 * module 用于支持CommonJs模块化规范的暴露语法
 * __filename 当前运行文件的绝对路径
 * __dirname 当前运行文件所在文件夹的绝对路径
 *
 * 2.为什么要设计这个外层函数（这个外层函数的存在有什么作用）
 *  1）.用于支持模块化语法
 *  2）.隐藏服务器内部实现
 *
 * */


console.log(arguments.callee.toString()); //输出外层函数



