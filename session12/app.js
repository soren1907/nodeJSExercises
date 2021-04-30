//afprøvet før undervisning. ikke løst optimalt
// ./databases/mongodb eller mysql er fra undervisning

const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'fifa2013',
    database : 'pets'
})

connection.connect();

app.get("/", (req, res) => {

    connection.query('SELECT * FROM cats', function (error, results, fields) {
        if (error) throw error;
        const cats = results
        res.send({cats})
    });

});

const port = process.env.PORT || 8080

const server = app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server is running on port", server.address().port);
});




