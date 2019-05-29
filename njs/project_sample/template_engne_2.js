var fs = require("fs")
var http = require("http")
var express = require("express")


var app = express()
app.set("view engine", "ejs");

app.get("/student/:id", function(request, responce){
    var  students  = {
        1: {
            name : "vishnnu", 
            subject : [ "c", "java", "c#"]
        },
        2: {
            name : "sai",
            subject : ["js", "linux", "sql"]
        }
    }
    responce.render("index_1.ejs",{id : request.params.id, name : students[request.params.id].name
        , subject : students[request.params.id].subject} )
})


app.listen(3000, function(){
    console.log("server is up and running on http://127.0.0.1:3000")
})