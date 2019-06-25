var express = require("express")
var app = express()

var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.use("/static", express.static("static"))
var server  = app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/process",urlencodedParser, function(req, res)
{
    var first_name  = req.body.first_name;
    var lst_name = req.body.last_name;
    output = "your name is "+ first_name + " "+ lst_name;
    res.send(output)
})
app.listen(3000, function(){
    console.log("your server is up and running  and local host 3000 port")
})