const express = require("express");
const app = express();

/*
app.get("/", (req, res) => {
    res.send({message: "First call to /" });
});


app.get("/anotherhpath", (req, res) => {
    const id = 1;
    res.send({ data: "some other things"});
});

*/

//Data fra design af RESTful API.  
const footballs =[ 
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


//Første argument er et url (end point) eks.  /footballs
//det andet argument er en callback function. 
// Funktionen kaldes når der kommer en http get request til endpointet

app.get("/footballs", (req, res) => {
   res.send(footballs);
});
 

app.get("/footballs/:id", (req, res) => {
   const football = footballs.find(c => c.id == parseInt(req.params.id))
   res.send(football);
});

app.listen(3000);
