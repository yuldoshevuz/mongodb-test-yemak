const restaurantsModel = require('../models/restaurant.model')

const getAllRestaurants = async (req, res) => {
    const restaurantsList = await restaurantsModel.getAll()
    res.status(200).json({
        status: true,
        restaurants: restaurantsList
    })
}

const addRestaurant = async (req, res) => {
    const { name,phone_number, s_work_time, e_work_time, work_status, address } = req.body

    await restaurantsModel.create({ name,phone_number, s_work_time, e_work_time, work_status, address })

    res.status(201).json({
        status: true,
        message: 'Restaurant added successfuly'
    })
}

module.exports = { getAllRestaurants, addRestaurant }