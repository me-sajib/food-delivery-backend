const { getItems, newItems } = require('../controllers/items.controller');

const router = require('express').Router();

router.get("/", getItems);

router.post("/", newItems);


module.exports = router;