
const mocha = require("mocha");
const mongoose = require("mongoose");

// connect the database
var mangodb = "mongodb+srv://dbuser:dbuser@cluster0-gouvv.gcp.mongodb.net/bank?retryWrites=true&w=majority";
mongoose.connect(mangodb);

// create schema
var Schema = mongoose.Schema;

var DetailsSchema = new Schema({
    bank_name: String,
    bank_intrest_rate:Number
});


// creating model with above schema
var Details = mongoose.model('banking_intrest_rates', DetailsSchema); // details is the name of the collection in the model


// entering values and saving with the message
// var item_one = Details(
//     {
//         bank_name:"vihnu",
//         bank_intrest_rate:40
//     }
// ).save().then(res => 
// {
//     console.log(res)
// }).catch(err =>
//     {
//         console.log(err)
//     })

Details.find({}, function(err, data){
    if(err) throw err;
    for(i=0;i<data.length;i++)
    {
        console.log(data[i].bank_name,"  ",data[i].bank_intrest_rate)
    }

})


