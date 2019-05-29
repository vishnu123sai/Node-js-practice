const EventEmmiter = require('events')

const eventEmmiter= new EventEmmiter()

eventEmmiter.on('sum',(a,b)=>{
    console.log(a+b)
} )

eventEmmiter.emit('sum',1,2)