const swaggerAutogen = require("swagger-autogen");


const doc = {
    info:{
        title:"Users Api",
        description:"Users Api"
    },
    host: "localhost:4000",
    schemes: ("https")
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

// To generate swagger.json
swaggerAutogen(outputFile, endpointFiles, doc);