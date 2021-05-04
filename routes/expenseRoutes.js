const expenseRoutes = require('express').Router()
const expenseControllers = require('../controllers/expenseControllers')

expenseRoutes.post('/create', expenseControllers.create)


expenseRoutes.put('/:id', expenseControllers.update)

expenseRoutes.delete('/:id', expenseControllers.destroy)

expenseRoutes.get('/allexpenses/:id', expenseControllers.index)


module.exports = expenseRoutes
