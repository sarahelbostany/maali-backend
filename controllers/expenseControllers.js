const { request } = require('express')
const models = require('../models')

const expenseControllers = {}

//add expense
expenseControllers.create = async (req, res) => {
    try {

        const user = await models.user.findOne ({
            where: {id: req.body.userId}
        })
        const expense = await models.expense.create ({
            expense: req.body.expense,
            amount:req.body.amount,
            category: req.body.category,
        },
       )
        const newExpense = await user.addExpense(expense)
        await models.user.update({
            total: user.total - req.body.amount }, {
                where: {id: user.id }
            })

        await newExpense.reload()

        res.json({expense})



    }catch (error) {
        console.log(error);
    }
}

//edit expense
expenseControllers.update = async (req, res) => {
    console.log(req.params);
    try {
        const expense = await expense.update({
            expense: req.body.expense,
            amount:req.body.amount,
            category: req.body.category,
        })

        res.json({expense, message: 'youre expense has been updated'})

    }catch (error) {
        console.log(error);
        res.status(400).json({ error: error.mesaage })
    }
}

//delete
expenseControllers.destroy = async (req, res) => {
    console.log(req.params);
    try {
        const expense = models.expense.destroy({
            where: {
                id: req.params.id
            }
        })

        res.json({expense, message: 'deleted successfully'})
        await expense.reload()

    }catch (error) {
        console.log(error);
        res.status(400).json({ error: error.mesaage })
    }
}


expenseControllers.index = async (req, res) => {
    console.log('backend', req.params.id)
    try {

        const expenses = await models.expense.findAll ({
            where: {userId: req.params.id}
        })


        res.json((expenses))
    }catch (error) {
        console.log(error);
    }
}


module.exports = expenseControllers
