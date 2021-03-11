const express = require("express");
const app = express();
let date_ob = new Date(); 
app.use(express.json());


const wine = require("./wine.json");

app.get("/wine", (req, res) => {
    res.send({wine});
});



app.listen(8086, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server is running on port", 8086)
});