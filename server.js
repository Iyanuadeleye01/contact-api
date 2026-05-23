const express = require("express");
const app = express();
const route = require("./routes");
const mongo = require("./data/database");
const bodyParser = require("body-parser");

const port = process.env.PORT || 4000


app.use(bodyParser.json());
app.use((req,res,next) => {
    res.setHeader("Acess-Control-Allow-Origin","*");
    res.setHeader(
        "Acess-C0ntrol-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
    );
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
    next();
})

app.use("/", route);

mongo.initDb((err) => {
    if (err) {
        console.log(err);
    }else{
        app.listen(port, () =>(console.log(`Database is listening on port ${port}`)));
    }
});
