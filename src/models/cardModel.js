const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true,
    },
    answer: {
        type: String,
        required: true,
        trim: true,
    }
})

const cardModel = mongoose.model("card", cardSchema)

module.exports = cardModel 