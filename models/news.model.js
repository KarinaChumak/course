var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
    title:String,
    content:String,
    date:Date



});

module.exports = mongoose.model('News', NewsSchema);