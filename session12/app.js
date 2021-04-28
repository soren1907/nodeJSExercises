const express = require("express");
const app = express();
app.use(express.static('public'));


app.get("/", (req, res) => {
    res.send({name: "soren"});
});

const port = process.env.PORT || 8080

const server = app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server is running on port", server.address().port);
});




