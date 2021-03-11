const express = require("express");
const app = express();
app.use(express.json());

// how do i represent the anime_names collection
const animeNames = [
    {id: 1, name: "Attack on titan"},
    {id: 2, name: "One punch man"}
];

app.get("/anime_names", (req, res) => {
    res.send({ data: animeNames });
});

app.get("/anime_names/:id", (req, res) => {
    const AnimeNameId = Number(req.params.id);
    const foundAnimeName = animeNames.find(animeName => animeName.id === AnimeNameId);
    res.send({ data: foundAnimeName });
});


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } else{
        console.log("server is running on port", 8080)
    }
});




