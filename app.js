const fs = require('fs')
const express = require('express')

const app = express()


app.get('/',function(req,res){
  fs.readFile('index.html', "UTF8", (err,data) => {
    res.send(data);
  })
});

app.listen(process.env.port || 3000,function(){
    console.log("server started ");
});
