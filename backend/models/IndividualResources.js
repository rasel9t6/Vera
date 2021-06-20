const {model, Schema} = require('mongoose')

const IndResSchema = new Schema({
    ImageURL: String,
    ImageAltText: String,
    Title: String,
    Address: String,
    BuildingName: String,
    ParagraphText: String,
    PhoneNumber: String,
    ResourceURL: String,
    LastUpdate: Date,
    Category: String,
    WhatToExpect: [String],
    ListOfHours: [String]
})

module.exports = model('individual-resources ', IndResSchema, 'individual-resources ')
