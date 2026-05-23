const { ObjectId } = require("mongodb");
const mongoDb = require("../data/database");
const objectId = require("mongodb").ObjectId;


const getAll = async (req, res) => {
    //#swagger.tags = ['Hello world']
    result = await mongoDb.getDatabase().db().collection("contacts").find();
    result.toArray().then((users) => {
        res.setHeader("Content-Type","application/json");
        res.status(200).json(users);

    });
};

const getSingle = async (req, res) => {
    //#swagger.tags = ['Hello world']
    const userId = new ObjectId(req.params.id);
    const result = await mongoDb.getDatabase().db().collection("contacts").find({_id: userId});
    result.toArray().then((users) => {
        res.setHeader("Content-Type","application/json");
        res.status(200).json(users);

    });
};

const createUser = async (req, res) => {
    //#swagger.tags = ['Hello world']
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColour: req.body.favoriteColour,
        birthDay: req.body.birthDay

    }
    const response = await mongoDb.getDatabase().db().collection('users').insertOne(user);
    if (response.acknowledged) {
        res.status(200).send();
    }else{
        res.status(500).json(response.error || 'some errors occured while updating the user');
    }
};

const updateUser = async (req, res) => {
    //#swagger.tags = ['Hello world']
    const userId = new objectId(req.params.id);
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColour: req.body.favoriteColour,
        birthDay: req.body.birthDay

    }
    const response = await mongoDb.getDatabase().db().collection('users').replaceOne({id: userId}, user);
    if (response.modifiedCount > 0) {
        res.status(200).send();
    }else{
        res.status(500).json(response.error || 'some errors occured while updating the user');
    }

    
};

const deleteUser = async (req, res) => {
    //#swagger.tags = ['Hello world']
    const userId = new objectId(req.params.id);
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColour: req.body.favoriteColour,
        birthDay: req.body.birthDay

    }
    const response = await mongoDb.getDatabase().db().collection('users').deleteOne({id: userId}, true);
    if (response.deleteCount > 0) {
        res.status(200).send();
    }else{
        res.status(500).json(response.error || 'some errors occured while deleting the user');
    }
};

module.exports = {
    getAll, 
    getSingle,
    createUser,
    updateUser,
    deleteUser
};