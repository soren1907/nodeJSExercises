const express = require("express");
const app = express();
app.use(express.json());



//hvad man kan kalde folder med html
// html, templates, views ,public, www, static


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html")
});


app.listen(8086, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server is running on port", 8086)
});