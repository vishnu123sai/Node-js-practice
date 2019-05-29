var event = require('events')
var utils = require('util')
// eventEmitter = new event.EventEmitter();

// eventEmitter.on('click', function(button){
//     console.log(button+" buttons are clicked")
// });
// eventEmitter.emit('click', "space")

eventEnitter  = new event.EventEmitter();


var Student = function(name){
    this.name = name;
}

utils.inherits(Student, event.EventEmitter);

var max = new Student("vishnu")
max.on('scored', function(marks){
  console.log(max.name + " scored " + marks + " marks ")
})

max.emit('scored', 90)


var tom = new Student("tom")
tom.on('scored', function(marks){
  console.log(tom.name + " scored " + marks + " marks ")
})

tom.emit('scored', 60)
