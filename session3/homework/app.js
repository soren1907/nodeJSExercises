const express = require("express");
const path = require("path"); //behøver ikke installeres. Er del af core modules.
const app = express();
let date_ob = new Date(); 

//Ikke et krav til opgaven.. prøvet for sjov (linje 12) 
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

//Efter afleveringsfrist: opgave ikke løst optimalt.
//res.send() vil jeg have brugt i stedet for res.json().
//Misfortod "day". Troede det var dag på måneden.
//Måned udskrev jeg som tal men burde være månedsnavn.
//bedre løsninger har jeg lavet under:

//søndag først da det amerikanske system starter der. index 0 er derfor søndag
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//Array med alle månedsnavne forkortet
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Sep", "Oct", "Nov", "Dec"];

app.get("/day", (req, res) => {
    const currentWeekday = date_ob.getDay();
    res.send({day: weekdays[currentWeekday]});
});

app.get("/month", (req, res) => {
    const currentMonth = date_ob.getMonth();
    res.send({month: months[currentMonth]});
});

app.listen(8080);