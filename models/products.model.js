const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Food", itemsSchema);