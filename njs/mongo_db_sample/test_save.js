const mocha = require("mocha");
const mongoose = require("mongoose");
const schema = require("./create_schema_and_model")


mocha.describe("Saving Record", function(){
    it("Saves record to the database", function() { 
        var char = new schema({
            name : "vishnu",
            weight: 60
        });
        char.save()
     });
});