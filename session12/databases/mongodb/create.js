const MongoClient = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "beer";

MongoClient.connect(url, {useUnifiedTopology: true} ,(error, client) => {

    MongoClient.connect(url, {useUnifiedTopology: true} ,(error, client) => {
        if (error) {
            throw new Error(error);
        }
        const db = client.db(dbName);
        const brewery = db.collection("brewery");

        brewery.insertOne({ name: `Nørrebro Bryghus`, alc: 7} , (error, result ) => {
            if (error) {
                throw new Error(error);
            }
            console.log(result)
            client.close
        })
    });
});