const express = require("express");
const app = express();
//app.use(express.json());

app.use(express.static('public'));
//hvad man kan kalde folder med html
// html, templates, views ,public, www, static

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome/welcome.html")
});

//serve a page related to pizza
app.get("/pizza", (req, res) => {
    res.sendFile(__dirname + "/public/pizza.html")
});

app.get("/whiskey", (req, res) => {
    res.send({ barkeep: "Here you go"})
});

app.get("/pub", (req, res) => {
    if (Number(req.query.money) >  500){
        return res.redirect("/whiskey");
    } 
    res.send({doorman: "sorry, you dont have $ for whisky"})
});

app.get("/candle", (req, res) => {
    //if the key in the query sting "blow" is defined, return lightsOn: false
    // otherwise respond with lightsOn: true
    if (req.query.blow) {
        res.send({lightsOn: false});
    }
    res.send({lightsOn: tue});
})

app.get("/catfacts", (req, res) => {
    res.sendFile(__dirname + "/public/catfacts/catfacts.html")
})

const port = process.env.PORT || 8080

const server = app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server is running on port", server.address().port);
});




