const express = require("express");
const app = express();

app.get("/about", (req, res) => {
    res.send({
        version: "4.1.2"
    });
});

app.get("/page", (req, res) => {
    res.send("<h1>Welcome</h1>");
});


app.listen(8081);