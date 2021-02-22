const express = require("express");
const path = require("path"); //behøver ikke installeres. Er del af core modules.
const app = express();
let date_ob = new Date(); 

//Ikke et krav i opgaven.. (linje 11) 
//Den her linje sætter mappen "view" static og man behøver nu ikke at hente alle filer manuelt.
//path.join bruges til at sætte path op til filerne. (__dirname er mappen, app.js ligger i).
//metoden gør også at html filer i mappen kan vises på localhost uden at sætte en route op
//Eks. hvis jeg havde en fil "test123.html" kunne jeg finde den på localhost:8080/test123.html
//index.html kommer automatisk på endpoint "/"
app.use(express.static(path.join(__dirname, 'view')));

//"index.html" i "view" skal vise hvilke api'er der er, og hvordan man rammer dem.

app.get("/time", (req, res) => {
    const time = {
        hour: date_ob.getHours(),
        min: date_ob.getMinutes(),
        sec: date_ob.getSeconds()
    };
    res.json(time);
});

app.get("/date", (req, res) => {
    const date = {
        date: date_ob.getDate()
    };
    res.json(date);
});

app.get("/month", (req, res) => {
    const month = {
        month: date_ob.getMonth() + 1   //+ 1 da januar er 0 (går fra 0-11) 
    };
    res.json(month);
});

app.listen(8080);