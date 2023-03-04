const app = require('./app');
const config = require("./config/config")
const PORT = config.app.port;



app.get("/", (req, res) => {
    res.send("Home route");
})

app.listen(PORT, () => {
    console.log("Running project on " + PORT);
})