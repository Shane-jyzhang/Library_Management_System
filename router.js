/**
 * 路由模块
 */
 const express = require('express');
 const router = express.Router();
 const service = require('./service.js');
 
 //路由处理:通过路由绑定路径
 //渲染主页
 //'/'表示根目录
 router.get('/',service.showIndex);
 //添加图书：跳转到添加图书的页面
 //跳转到虚拟路径：http://localhost:3000/toAddBook
 router.get('/toAddBook',service.toAddBook);
 //添加图书：提交表单
 router.post('/addBook',service.addBook);
 //跳转到编辑图书信息页面：跳转页面用get就可以
 router.get('/toEditBook',service.toEditBook);
 //编辑图书提交表单:修改页面用post提交
 router.post('/editBook',service.editBook);
 //删除图书信息
 router.get('/deleteBook',service.deleteBook);
 //必须导出，否则在index页面使用不了
 module.exports = router;