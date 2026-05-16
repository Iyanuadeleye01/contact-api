const { ObjectId } = require("mongodb");
const mongoDb = require("../data/database");
const objectId = require("mongodb").ObjectId;


const getAll = async (req, res) => {
    result = await mongoDb.getDatabase().db().collection("contacts").find();
    result.toArray().then((users) => {
        res.setHeader("Content-Type","application/json");
        res.status(200).json(users);

    });
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongoDb.getDatabase().db().collection("contacts").find({_id: userId});
    result.toArray().then((users) => {
        res.setHeader("Content-Type","application/json");
        res.status(200).json(users);

    });
};

module.exports = {getAll, getSingle};