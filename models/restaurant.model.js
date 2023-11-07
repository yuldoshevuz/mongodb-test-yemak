const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('yemak')
const restaurants = db.collection('restaurants')

const getAll = async () => {
    try {
        return await restaurants.find().toArray()
    } catch (error) {
        console.log(error)
    }
}

const getOne = async (id) => {
    try {
        if (id.length !== 24) {
            return false
        }
        const restaurant = await restaurants.findOne({ _id: new ObjectId(id) })

        if (!restaurant) {
            return { status: 404 }
        }
        return { status: 200, doc: restaurant }
    } catch (error) {
        console.log(error)
    }
}

const create = async (document) => {
    try {
        const restaurant =  await restaurants.insertOne(document)

        if (!restaurant.insertedId) {
            return { status: 500 }
        }

        return { status: 200 }
    } catch (error) {
        console.log(error)
    }
}

const updateOne = async (id, document) => {
    try {
        if (id.length !== 24) {
            return { status: 400 }
        }
        const updatedRest = await restaurants.updateOne({ _id: new ObjectId(id) }, { $set: document })

        if (!updatedRest.upsertedId) {
            return { status: 404 }
        }

        return { status: 200 }
    } catch (error) {
        console.log(error)
    }
}

const deleteOne = async (id) => {
    try {
        if (id.length !== 24) {
            return { status: 400 }
        }
        const deletedRest = await restaurants.deleteOne({ _id: new ObjectId(id) })

        if (!deletedRest.deletedCount) {
            return { status: 404}
        }

        if (deletedRest.deletedCount) {
            return { status: 200 }
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAll, getOne, create, updateOne, deleteOne }