var express = require("express")

var app = express()

// function fun(req, res)
// {
//     res.send("Hello World");
// }

// app.get("/", fun);

app.get("/", function(req, res){
    res.send("Hello Home")
})

app.get("/content", function(req, res){
    res.send("Hello content")
})

app.get("/about", function(req, res){
    res.send("Hello about")
})



app.listen(3000, function(){
    console.log("server running and up")
})