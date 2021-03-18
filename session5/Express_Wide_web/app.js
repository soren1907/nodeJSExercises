const express = require("express");
const app = express();
app.use(express.json());

//hvad man kan kalde folder med html
// html, templates, views ,public, www, static


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html")
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
        res.redirect("/whiskey");
    } else {
        res.send({doorman: "sorry, you dont have $ for whisky"})
    }
});




const port = process.env.PORT || 8080

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server is running on port", port)
});