var time = 0;
var timer = setInterval(function(){
    if(time>15)
        clearInterval(timer)
    time = time + 3;
    console.log(time 
        +" Seconds")
}, 3000);

console.log(__dirname)

console.log(__filename)
exports.timer = timer;
exports.time = time;