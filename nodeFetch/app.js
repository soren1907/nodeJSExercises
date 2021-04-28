const express = require("express");
const app = express();
const fetch = require('node-fetch');

// fetch returnerer en "promise", derfor bruges .then()
// første .then laver html-koden til en string
// næste .then sender derefter html koden til endpointet /proxy 
app.get("/proxy", (req, res) => {
    fetch('https://google.com')
    .then(res => res.textConverted())
    .then(body => res.send(body))
    
});

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server is running on port", port);
});


//

