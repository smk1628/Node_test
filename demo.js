/**
 * 输出node的外层函数 function (exports, require, module, __filename, __dirname) {}
 * */


console.log(arguments.callee.toString()); //输出外层函数
