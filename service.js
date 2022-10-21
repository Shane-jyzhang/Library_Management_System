/**
 * 业务模块
 */
 const data = require('./data.json');
 const path = require('path');
 const fs = require('fs');
 const db = require('./database.js');
 
 /* //自动生成图书编号（自增）
 let maxBookCode = () => {
     let arr = [];
     data.forEach(item => {
         arr.push(item.id);
     });
     return Math.max.apply(null,arr);
 }
 
 //把内存数据写入到文件
 let writeDataFile = (res) => {
     //需要把内存中的数据写入文件
     //JSON.stringify(data)仅传data一个参数的话，data.json文件是压缩形式的
     fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data,null,4),(err) => {
         if(err){
             res.send('server err');  
         }
         //文件写入成功之后重新跳转到主页面
         res.redirect('/');
     });
 }
  */
  //渲染主页面
  exports.showIndex = (req,res) => {
      let sql = 'select * from book';
     //从数据库中获取内容
     db.base(sql,null,(result) => {
         //数据库获取的内容只能通过回调函数来得到
         res.render('index',{list:result});
     })
     //res.render('index',{list:data});
  }
 
  //跳转到添加图书的页面
  exports.toAddBook = (req,res) => {
      //render将会根据views中的模板文件进行渲染,渲染的是空对象{}
      res.render('addBook',{});
  }
 
  //添加图书保存数据
  exports.addBook = (req,res) => {
      //获取表单数据
      let info = req.body;
      let book = {};
      for (const key in info) {
          book[key] = info[key];
      }
 
      let sql = 'insert into book set ?'
      db.base(sql,book,(result) => {
          if(result.affectedRows == 1){
              //添加成功后跳转到主页面
              res.redirect('/');
          }
      });
 
      /* book.id = maxBookCode()+1;
      data.push(book);
      //需要把内存中的数据写入文件
      writeDataFile(res); */
  }
 
  //跳转到编辑页面
  exports.toEditBook = (req,res) => {
     let id = req.query.id;
     let sql = 'select * from book where id=?';
     let data = [id];
     db.base(sql,data,(result)=>{
         //注意：必须使用result[0]获取数据才能渲染到页面上，因为得到的resul结果集是一个数组，不是对象，渲染不了
         res.render('editBook',result[0]);
     });
     /* let book = null;
     data.forEach((item)=>{
         if(id == item.id){
             book = item;
             //break;
             //forEach循环中不能有break,用return终结即可
             return;
         }
     }); 
     //render将会根据views中的模板文件进行渲染，渲染的是对应图书的完整信息
     res.render('editBook',book); */
  }
 
  //编辑图书更新数据:
  //1.先查询出对应的数据并渲染到页面上
  //2.然后再提交表单，再重新保存，写入文件
  //编辑的时候要告诉服务器编辑的是哪条数据
  exports.editBook = (req,res) => {
     //报错：为什么总是跳转到addBook的页面？  问题已解决：editBook.art页面的action路径错写成'/addBook',改成'/editBook'就可以正常运行
     //获取表单的数据
     let info = req.body;
 
     let sql = 'update book set name=?,genre=?,date=?,author=? where id=?';
     let data = [info.name,info.genre,info.date,info.author,info.id];
     db.base(sql,data,(result) => {
         if(result.affectedRows == 1){
             //更新成功后跳转到主页面
             res.redirect('/');
         }
         else{
             res.send('edit failure');
         }
     });
 
      /* //覆盖原有的数据
      data.forEach((item)=>{
          if(info.id == item.id){
              for (const key in info) {
                  item[key] = info[key];
              }
              return;
          }
      });
      //需要把内存中的数据写入文件
      writeDataFile(res); */
  }
 
  //删除图书信息
  exports.deleteBook = (req,res) => {
      //先获取到传过来的id
      let id = req.query.id;
 
     let sql = 'delete from book where id=?';
     let data = [id];
     db.base(sql,data,(result) => {
         if(result.affectedRows == 1){
             //删除成功后跳转到主页面
             res.redirect('/');
         }
     });
 
     /*  data.forEach((item,index)=>{
          if(item.id == id){
             //删除数组的一项数据
             data.splice(index,1);  
          }
          return;
      });
      //需要把内存中的数据写入文件
      writeDataFile(res); */
  }