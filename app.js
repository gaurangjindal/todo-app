const fs = require('fs')
const express = require('express')

const app = express()


app.get('/',function(req,resp){
     fs.readFile("index.html",function(err,data){
        if (err) throw err;
        resp.send(data);
    })
});

app.listen(6060,function(){
    console.log("server started");
});
