const express = require("express");
const app = express();
let date_ob = new Date(); 
app.use(express.json());

//Homework: Lav CRUD API (fra sidste uge) færdigt
//GET-metoder: se sidste uges homework (session3).
//POST-metoder: linje 12
//PUT-metoder: linje 37
//DELETE-metoder: linje 103

//POST-metoder
//Bruger postman til tjek. I body sender jeg et objekt der indeholder
//id, time, min og sek. I response sender jeg det nye time objekt der er lavet.
app.post("/time", (req, res) => {
    console.log(req.body);
    const currentTime = {
         hour: req.body.hour,
         min: req.body.min,
         sec: req.body.sec
    };
    res.send({time: currentTime});
});

app.post("/day", (req, res) => {
    console.log(req.body);
    const currentDay = req.body.day;
    res.send({day: currentDay});
});

app.post("/month", (req, res) => {
    console.log(req.body);
    const currentMonth = req.body.month;
    res.send({month: currentMonth});
});

//PUT-medtoder
//For at kunne bruge PUT og DELETE må jeg have noget
//data der kan ændres. Jeg gør det simpelt og hardcoder arrays
const myTimes = [
    {id: 1, hour: 12, min: 36, sec: 12},
    {id: 2, hour: 3, min: 11, sec: 59}
];

const myDays = [
    {id: 1, day: "Tuesday"},
    {id: 2, day: "Friday"}
];

const myMonths = [
    {id: 1, month: "Apr"},
    {id: 2, month: "Jul"}
];

app.put("/time/:id", (req,res) => {
    //hvis tid med id ikke findes er found = false
    const id = parseInt(req.params.id);
    const found = myTimes.some(time => time.id === id);
    if(found) {
        myTimes.map(currentTime => {
            if(currentTime.id === id){
                currentTime.hour = req.body.hour;
                currentTime.min = req.body.min;
                currentTime.sec = req.body.sec;
                res.send({msg: 'time updated', currentTime});
            }
        });
    } else {
         res.send({msg: 'time not found'});
    } 
});

app.put("/day/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const found = myDays.some(day => day.id === id);
    if(found) {
        myDays.map(currentDay => {
            if(currentDay.id === id){
                currentDay.day = req.body.day;
                res.send({msg: 'day updated', currentDay});
            }
        });
    } else {
         res.send({msg: 'day not found'});
    } 
});

app.put("/month/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const found = myMonths.some(month => month.id === id);
    if(found) {
        myMonths.map(currentMonth => {
            if(currentMonth.id === id){
                currentMonth.month = req.body.month;
                res.send({msg: 'month updated', currentMonth});
            }
        });
    } else {
         res.send({msg: 'month not found'});
    } 
});

//DELETE-metoder
//Bruger (, index) i map for at kunne slette element.
//Bruger de samme arrays fra PUT-metoderne
app.delete("/time/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const found = myTimes.some(time => time.id === id);
    if(found) {
        myTimes.map((currentTime, index) => {
            if(currentTime.id === id){
                myTimes.splice(index,1);
                res.send({msg: 'removed time success'});
            }
        });
    } else {
         res.send({msg: 'time not found'});
    } 
    console.log(myTimes);
});

app.delete("/day/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const found = myDays.some(day => day.id === id);
    if(found) {
        myDays.map((currentDay, index) => {
            if(currentDay.id === id){
                myDays.splice(index,1);
                res.send({msg: 'removed day success'});
            }
        });
    } else {
         res.send({msg: 'day not found'});
    } 
    console.log(myDays);
});

app.delete("/month/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const found = myMonths.some(month => month.id === id);
    if(found) {
        myMonths.map((currentMonth, index) => {
            if(currentMonth.id === id){
                myMonths.splice(index,1);
                res.send({msg: 'removed success'});
            }
        });
    } else {
         res.send({msg: 'month not found'});
    } 
    console.log(myMonths);
});

app.listen(8085);