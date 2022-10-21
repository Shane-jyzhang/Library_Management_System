//const express = require('express')
const http = require('http');
const PORT = '3000';        
//const PORT = process.env.PORT
const HOSTNAME = '127.0.0.1';

//创建http server
const server = http.createServer(function (req, res){
    res.writeHead(200);
    //response.setHeader('Content-Type', 'text/plain');
    res.end('Hi I am nodejs http server');
})
server.listen(PORT, HOSTNAME, ()=>{
    console.log('Server is working on http://' + HOSTNAME + ':' + PORT);
    //console.log()
})