var fs  = require("fs")
var express = require("express")

var app = express();


app.get("/", function(req, res){
  
    res.sendFile(__dirname+"/index.html");  // dont forget to give full path it requires full path 
})
app.listen(3000, function(){
    console.log("Your server and up and running on http://127.0.0.1:3000")
})

// but if we want to pass some information to html we cant use this this type we can use some external packages and add them and use them 



// lets write another program  using templte engine so that we can pass the values too html 

// we are using EJS embedded java script template engine 

// to get EJS install ejs on your local 