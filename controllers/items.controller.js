const itemsSchema = require('../models/items.model');

const getItems = (req, res) => {
    const food = [{ id: 1, name: "pasta", price: 200 }, { id: 2, name: "Burger", price: 300 }]
    res.status(201).json(food);
};

const newItems = async (req, res) => {
    try {
        const newItem = new itemsSchema({
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
        })
        await newItem.save();
        res.status(201).send({ newItem });
    } catch (error) {
        res.status(500).send(error.message);
    }

};

module.exports = { getItems, newItems }