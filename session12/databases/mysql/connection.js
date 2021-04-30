require("dotenv").config();

const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
})

connection.connect();

//i want to create a table called beers
//create a sql query for it in a comment below
// DDL (drop table, create table) , DML (Select table osv.)
// here: CREATE TABLE IF NOT EXISTS beers (brand VARCHAR(50), alcLevel int);

if (process.argv.includes("--createdb")) {
    query = "CREATE TABLE IF NOT EXISTS beers (brand VARCHAR(50), alcLevel FLOAT);"
    console.log("Creation Mode Activatet")
    connection.query(query, (error, result, fields) => {
        if (error) {
            throw new Error(error);
        }
        console.log(result);
        connection.end();

    });
}

module.exports = {
    connection
}