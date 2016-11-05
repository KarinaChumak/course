var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
    name:String,
    surname: String,
    email: String,
    password:String,
    role:String
});

module.exports = mongoose.model('Admin', AdminSchema);