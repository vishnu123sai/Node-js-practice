var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DetailsSchema = new Schema({
    name: String,
    weight:Number
});

var Details = mongoose.model('details', DetailsSchema)

module.exports = Details;