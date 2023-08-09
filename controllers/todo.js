const Todo = require('../models/todo')

const controllerTodo = {
    create: async (req, res) => {
        try {
            const activity = req.body.activity
            await Todo.create({
                activity: activity
            }).then(console.log('author created'))
            res.json({ msg: 'created' })
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    },
    getTodo: async (req, res) => {
        try {
            const activities = await Todo.find({})
            res.json(activities)
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    },
    getTodoById: async (req, res) => {
        try {
            const { id } = req.params
            const todo = await Todo.findById(id)
            res.json(todo)
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    },
    updateTodo: async (req, res) => {
        try {
            const { id } = req.params
            const activity = req.body.activity
            await Todo.findByIdAndUpdate(id, {
                activity: activity
            })
            res.json({ msg: 'update' })
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    },
    deleteTodo: async (req, res) => {
        try {
            const { id } = req.params
            await Todo.findByIdAndDelete(id)
            res.json({ msg: 'Delete' })
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    }
}
module.exports = controllerTodo