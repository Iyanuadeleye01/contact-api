const express = require("express");
const app = express();
const route = require("./routes");
const mongo = require("./data/database");

const port = process.env.PORT || 4000

app.use("/", route);

mongo.initDb((err) => {
    if (err) {
        console.log(err);
    }else{
        app.listen(port, () =>(console.log(`Database is listening on port ${port}`)));
    }
});
