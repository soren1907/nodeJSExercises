const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({});
});

app.get("/me", (req, res) => {
    const me = {
        name: "søren2"
    };
    res.send(me);
});




app.listen(8080);