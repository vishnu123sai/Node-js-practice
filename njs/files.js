var fs  = require('fs')

// var string  = fs.readFileSync('vishnu.text', 'utf-8');  // this is the way to read the file synchronously



// // console.log(string)

// fs.writeFileSync("vishnu_temp.txt", string);

// var string  = fs.readFileSync('vishnu_temp.txt', 'utf-8');

// console.log(string)

// we have another way to read the file without synchronously there we also have a fun with arg err and data 
// 1. err will contain error log if any occurs 
// 2. data contains the actual output 

// var string  = fs.readFile('vishnu_temp.txt', 'utf8', function(err, data){
//     if(err)
//     return console.error(err);
    
//     // console.log(data)
// });

// console.log("file is reading")


// file creation and deletion using node.js

// we just need to use unlink method to delete the file
fs.unlink('vishnu.text') ;