const { Router } = require('express')
const router = Router()

const { getAllRestaurants, getRestaurantById, addRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurants.controller')
const { addRestaurantValidation, updateRestaurantValidation } = require('../validators/restaurant.validator')
const handleValidation = require('../middlewares/handle.validation')

router.get('/', getAllRestaurants)
router.get('/view/:id', getRestaurantById)
router.post('/add', addRestaurantValidation, handleValidation, addRestaurant)
router.put('/update/:id', updateRestaurantValidation, handleValidation, updateRestaurant)
router.delete('/delete/:id', deleteRestaurant)

module.exports = router