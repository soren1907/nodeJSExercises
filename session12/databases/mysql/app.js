const db = require("./connection.js").connection;

// db.query(`INSERT INTO beers VALUES("Tuborg", 4.5)`, (error, result, fields) => {
//     console.log(fields)
// })

// db.query(`INSERT INTO beers VALUES(?, ?)`, ["Brewdog" , 7.0] ,(error, results, fields) => {
//     console.log(results)
// })

db.query("SELECT * FROM beers", (error, result, fields) => {
    console.log(result);
})

