const restaurantsModel = require('../models/restaurant.model')
const {del} = require("express/lib/application");

const errorLogger = require('../helpers/error.logger')

const getAllRestaurants = async (req, res) => {
    try {
        const restaurantsList = await restaurantsModel.getAll()
        res.status(200).json({
            status: true,
            restaurants: restaurantsList
        })
    } catch (error) {
        errorLogger(error.message, res)
    }
}

const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await restaurantsModel.getOne(req.params.id)

        if (restaurant.status === 404) {
            return res.status(restaurant.status).json({
                status: false,
                message: 'Restaurant not found'
            })
        }

        if (restaurant.status === 200) {
            return res.status(restaurant.status).json({
                status: true,
                restaurant: restaurant.doc
            })
        }

        errorLogger('Server error', res)
    } catch (error) {
        errorLogger(error.message, res)
    }
}

const addRestaurant = async (req, res) => {
    try {

        const restaurant = await restaurantsModel.create(req.body)

        if (restaurant.status === 500) {
            return res.status(restaurant.status).json({
                status: false,
                message: 'Not created. Error'
            })
        }

        if (restaurant.status === 200) {
            return res.status(201).json({
                status: true,
                message: 'Restaurant added successfully'
            })
        }

        errorLogger('Server error', res)
    } catch (error) {
        errorLogger(error.message, res)
    }
}

const updateRestaurant = async (req, res) => {
    try {
        const updatedRest = await restaurantsModel.updateOne(req.params.id, req.body)

        if (updatedRest.status === 400) {
            return res.status(updatedRest.status).json({
                status: false,
                message: 'Error id entered'
            })
        }

        if (updatedRest.status === 404) {
            return res.status(updatedRest.status).json({
                status: false,
                message: 'Restaurant not found'
            })
        }

        if (updatedRest.status === 200) {
            return res.status(200).json({
                status: true,
                message: 'Restaurant updated successfully'
            })
        }

        errorLogger('Server error', res)
    } catch (error) {
        errorLogger(error.message, res)
    }
}

const deleteRestaurant = async (req, res) => {
    try {
        const deletedResp = await restaurantsModel.deleteOne(req.params.id, req.body)

        if (deletedResp.status === 400) {
            return res.status(deletedResp.status).json({
                status: false,
                message: 'Error id entered'
            })
        }

        if (deletedResp.status === 404) {
            return res.status(deletedResp.status).json({
                status: false,
                message: 'Restaurant not found'
            })
        }

        if (deletedResp.status === 200) {
            return res.status(deletedResp.status).json({
                status: true,
                message: 'Restaurant deleted'
            })
        }

        errorLogger('Server error', res)
    } catch (error) {
        errorLogger(error.message, res)
    }
}

module.exports = { getAllRestaurants, getRestaurantById, addRestaurant, updateRestaurant, deleteRestaurant }