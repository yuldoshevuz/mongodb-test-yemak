const { Router } = require('express')
const router = Router()
const restaurantsRouter = require('./restaurants.router')

router.use('/restaurants', restaurantsRouter)

module.exports = router