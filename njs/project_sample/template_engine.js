var fs  = require("fs")
var http  = require("http")
var express  = require("express")  //  please install this before use using npm install express

var app = express(); // express module is very easy and convienient to route the request ti the web pages
app.use("/static", express.static("static"))  // this  is the we can use the static files in our application 

// after that set our app to template engine  EJS
app.set("view engine", "ejs")  // this step is mandatory 

app.get("/", function(req, res){
    var name  = "vishnu"
    res.render("index", {"name":name});  // as a dictionary we pass the values to the web pages 
})

app.listen(3000, function(){
    console.log("server started........ at http://127.0.0.1:3000/")
})

// using this we can pass the values and information to html pages 

