/**
 * 图书管理功能-入口文件
 */
 const express = require('express');
 const tempalte = require('art-template');
 const bodyParser = require('body-parser');
 const path = require('path');
 const router = require('./router.js');
 const app = express(); 
 const PORT = '3000';        
 //const PORT = process.env.PORT
 const HOSTNAME = '127.0.0.1';
 //const { hostname } = require('os');
 
 //启动静态资源服务，添加了一个虚拟路径/www
 app.use('/www',express.static('./public'));
 
 //设置模板引擎
 //1.设置模板的路径:设定views变量，意为视图存放的目录
 app.set('views',path.join(__dirname,'views'));
 //2.设置模板引擎:后缀名为art
 app.set('view engine','art');
 //3.使express兼容art-template
 app.engine('art',require('express-art-template'));
 
 //处理请求参数
 //挂载参数处理中间件
 app.use(bodyParser.urlencoded({extended:false}));
 //处理json格式的参数
 app.use(bodyParser.json());
 
 //启动服务器功能：1.配置路由  2.监听端口
 //配置路由
 app.use(router);
 //监听端口
 app.listen(3000,()=>{
     console.log('running... http://'+ HOSTNAME + ':' +PORT);
 });