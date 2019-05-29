const sum = (a, b ) => a+b;
const pi = 3.14;
class Object_creation {
    constructor()
    {
        console.log("object is created")
    }
}
module.exports.sum = sum;
module.exports.pi = pi;
module.exports.Object_creation = Object_creation;