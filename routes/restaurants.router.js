const { Router } = require('express')
const router = Router()

const { getAllRestaurants, addRestaurant } = require('../controllers/restaurants.controller')

router.get('/', getAllRestaurants)

router.post('/add', addRestaurant)

module.exports = router