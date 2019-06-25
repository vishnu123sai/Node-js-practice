
const mocha = require("mocha");
const mongoose = require("mongoose");

// connect the database
var mangodb = "mongodb+srv://dbuser:dbuser@cluster0-gouvv.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mangodb);

// create schema
var Schema = mongoose.Schema;

var DetailsSchema = new Schema({
    name: String,
    weight:Number
});


// creating model with above schema
var Details = mongoose.model('details', DetailsSchema); // details is the name of the collection in the model


// entering values and saving with the message
var item_one = Details(
    {
        name:"vishnu",
        weight:40
    }
).save( function(err,data){
    if(err) throw err;
    console.log(data);
});



