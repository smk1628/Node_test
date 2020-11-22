const express = require('express')
const db = require('./db/db')
let citiesModel = require('./models/citiesModel')
const app = express()
app.use(express.static(__dirname+'/public'))

db((err)=>{
    if(!err){
        //获取中国所有省份信息
        app.get('/get_all_province',function (req,res){
            res.setHeader('Access-Control-Allow-Origin','*')
            citiesModel.find({level:1},{_id:0,province:1,name:1},(err,data)=>{
                if(!err&&data){
                    res.send({status:1,data:data})
                }else {
                    res.send({status:0,err:err})
                }
            })
        })
        //根据【省份编码】获取某省份下所有市的信息信息
        app.get('/get_cities_by_province',function (req,res){
            res.setHeader('Access-Control-Allow-Origin','*')
            let {province:province} = req.query
            citiesModel.find({level:2,province:province},{_id:0,city:1,name:1},(err,data)=>{
                if(!err&&data){
                    res.send({status:1,data:data})
                }else {
                    res.send({status:0,err:err})
                }
            })
        })
        //根据【省份编码】【市编码】获取某省份某市下所有区/县的信息
        app.get('/get_counties_by_province_and_city',function (req,res){
            res.setHeader('Access-Control-Allow-Origin','*')
            let {province:province,city:city} = req.query
            citiesModel.find({level:3,province:province,city:city},{_id:0,county:1,name:1},(err,data)=>{
                if(!err&&data){
                    res.send({status:1,data:data})
                }else {
                    res.send({status:0,err:err})
                }
            })
        })

        app.listen(3000,function (err){
            if(!err) console.log('server success');
            else console.log(err);
        })
    }else console.log(err)
})