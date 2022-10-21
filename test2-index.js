const express = require('express');
const path = require('path');  //一定要导入path！（ReferenceError: path is not defined）
const PORT = process.env.PORT || 3000;
const HOSTNAME = '127.0.0.1';

const app = express();

app.get('/', function(req, res){
    //res.send('Hi I am Jingye Zhang!');
    res.json('Hi from Express Server!');
});
app.get('/welcom', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(PORT);
console.log('the server is running on localhost:' + PORT);
console.log('Server is working on http://' + HOSTNAME + ':' + PORT);
