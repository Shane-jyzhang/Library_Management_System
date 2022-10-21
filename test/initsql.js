/**
 * 把database.js文件中的数据拼接成insert语句
 */
 const path = require('path');
 const fs = require('fs'); 
 
 fs.readFile(path.join(__dirname,'../data.json'),'utf8',(err,content) => {
     if(err) return;
     let list = JSON.parse(content);
     let arr = [];
     list.forEach(item => {
         //字符串拼接，用反引号
         let sql = `insert into book(name,genre,date,author) VALUES('${item.name}','${item.genre}','${item.date}','${item.author}');`
         //获取的只是一条sql语句，依此将sql语句存入数组中
         arr.push(sql);
     });
     fs.writeFile(path.join(__dirname,'data.sql'),arr.join(' '),'utf8',(err) => {
         console.log('init data finished!');
     });
 });