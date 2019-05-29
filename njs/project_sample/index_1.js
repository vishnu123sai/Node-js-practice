var express = require("express")

var app = express()

app.get("/" , function(req, res){
    res.send("Hello Vishnu")
})
var students = {
    1:"vishnnuvardhan",
    2: "sai kiran",
    3:"Nayakam"
}
app.get("/:name", function(req, res){
    res.send("you name is "+students[req.params.name])
})

// :_name  -> indicates parameter which we are passing we can access them with req.params._name  (_name is parameter name it can be any thing)

app.listen(3000, function(){
    console.log("server is started ......................")
})