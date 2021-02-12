const express = require("express");
const app = express();

//https://www.youtube.com/watch?v=pKd0Rpw7O48 <- inspiration hentet fra her

//Arbejder med data fra design af RESTful API.
//Design af rest api ligger i samme mappe "footballAPI.json"  
const footballs = [ 
    {
        "id": 1,
        "size": 5,
        "color": "blue",
        "weight": 410
    },
    {
        "id": 2,
        "size": 4,
        "color": "white",
        "weight": 320
    },
    {
        "id": 3,
        "size": 5,
        "color": "white",
        "weight": 405
    }
];
    
//GET metode der henter alle fodbolde
//Første argument er et url (end point) /footballs i dette tilfælde
//Det andet argument er en callback function. 
//Funktionen kaldes når der kommer et http get request til endpointet   
app.get("/footballs", (req, res) => {
    res.send(footballs);    
});
     
//GET metode der henter en fodbold.
//En arrowfunction gives med i "find-metoden" som parameter.  
//Denne funktion bruges til at finde fodbold der mathcer id.
//if-statement bruges til at give fejlmedlelse hvis id'et ikke eksisterer 
app.get("/footballs/:id", (req, res) => {
    const football = footballs.find(fb => fb.id === parseInt(req.params.id)); 
    if (!football){
        res.status(404).send('Football ID not found'); 
    }
    res.send(football);
});

app.listen(8080);
    