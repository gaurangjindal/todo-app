const fs = require('fs')
const express = require('express')

const app = express()


app.get('/',function(req,res){
  fs.readFile('index.html', "UTF8", (err,data) => {
    res.send(data);
  })
});

app.listen(3000,function(){
    console.log("server started at 3000");
});
