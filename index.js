const app = require('./app');
const foodRoutes = require("./routes/items.route");
const config = require("./config/config")
const PORT = config.app.port;


app.use("/foods", foodRoutes);

app.get("/", (req, res) => {
    res.send("Home route");
})

app.listen(PORT, () => {
    console.log("Running project on " + PORT);
})