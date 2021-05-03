const userRoutes = require('express').Router()
const userControllers = require('../controllers/userControllers')


userRoutes.post('/create', userControllers.create)
userRoutes.post('/login', userControllers.login)
userRoutes.get('/verify', userControllers.verify)

// userRoutes.get('/:id', userControllers.getUser)

// userRoutes.put('/:id', userControllers.update)

// userRoutes.delete('/:id', userControllers.destroy)


module.exports = userRoutes
