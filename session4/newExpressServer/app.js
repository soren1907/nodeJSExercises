const express = require("express");
const app = express();
//makes body/json parser available
//send bodies as json
app.use(express.json());

app.get("/search", (req, res) => {
    console.log(req.query)  //logs an object
    res.send({query: req.query});
});

app.get("/telegram/:message", (req, res) => {
    res.send({message: req.params});
});

app.get("/telegram/:message/:name", (req, res) => {

    const message = req.params.name + ", " + req.params.message;

    res.send({messages: message});
});

//post
app.post("/goodstuff", (req, res) => {
    console.log(req.body);
    res.send({ body: req.body});
});


app.listen(8082);