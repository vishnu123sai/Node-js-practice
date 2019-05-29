var http  = require("http")
var fs = require("fs")
http.createServer(function(req, res){
 console.log("requested url " + req.url)
 if(req.url === "/" || req.url === "/home")
 {
    res.writeHead(200, {"Content-Type": "text/html"}) 
    readStream = fs.createReadStream("index.html").pipe(res);
    
 }else if(req.url === "/json"){
    res.writeHead(200, {"Content-Type":"application/json"});
    readStream = fs.createReadStream("details.json").pipe(res);
 }
 else
 {
     res.writeHead(404, {"Content-Type":"text/html"})
     readStream = fs.createReadStream("404.html").pipe(res);
 }

}).listen(3000)


console.log("server started ----------------")