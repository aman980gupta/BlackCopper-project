const { MongoClient } = require('mongodb');
const env = require("dotenv").config()
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

module.exports = client;