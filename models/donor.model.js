var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var group = require('../config/group');


var DonorSchema = new Schema({
    name:{
        type: String,
        required: true,
        match: /^[a-z ,.'-]+$/i
    },
    surname: {
        type: String,
       required: true,
        match:/^[a-z ,.'-]+$/i

    },
    patronymic: {
        type: String,
      //  required: true,
        match: /^[a-z]+$/i

    },
    birthdate: {
        type: Date
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    },
    password:{
        type: String,
        required: true
    },
    city: {
        type: String,
        required:true
    },
    // area:String,
    // country: String,
    donations: [Date],
    group: {
        type:Number,
        required: true,
        enum: [1,2,3,4]//todo
    },
    rhesus:  {
        type: String,
        required: true,
        enum: ["positive", "negative"]
    },
    avatar:  {
        type: String
    }
});

module.exports = mongoose.model('Donor', DonorSchema);