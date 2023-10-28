const { MongoClient } = require("mongodb");
const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('yemak')
const restaurants = db.collection('restaurants')

const getAll = async () => {
    return await restaurants.find().toArray()
}

const create = async (document) => {
    await restaurants.insertOne(document)
}

module.exports = { getAll, create }