const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Food", itemsSchema);