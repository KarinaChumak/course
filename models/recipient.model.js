/**
 * Created by Karina on 22.11.2016.
 */
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;


var RecipientSchema = new Schema({
    name: String,
    surname: String,
    diagnose: String,
    city: String,
    group: Number,
    rhesus: String,
    email: String,
    avatar: String,
    status: String

});

module.exports = mongoose.model('Recipient', RecipientSchema);