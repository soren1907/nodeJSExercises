const express = require("express");
const app = express();


const server = require("http").createServer(app);

const io = require("socket.io")(server); //the io

io.on("connection", (socket) => {
    // console.log("A socket connected with id", socket.id);
    socket.on("colorChanged", (data) => {
        
        // console.log(data); 
        socket.emit("changeBackgroundToThisColor", data);

    });
});
//when a socket connects it is gonna exe the function and therefor console log^

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/colors.html");
})

server.listen(8080, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("Server is running on port", 8080);
});

