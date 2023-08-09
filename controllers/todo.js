const Todo = require('../models/todo')

const controllerTodo = {
    create: async (req, res) => {
        try {
            const activity = req.body.first_name
            const family_name = req.body.family_name
            await Author.create({
                first_name: first_name,
                family_name: family_name
            }).then(console.log('author created'))
            res.json({ msg: 'created' })
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    },
    getAuthors: async (req, res) => {
        try {
            const authors = await Author.find({})
            res.json(authors)
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    },
    getAuthorsById: async (req, res) => {
        try {
            const { id } = req.params
            const author = await Author.findById(id)
            res.json(author)
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    },
    updateAuthor: async (req, res) => {
        try {
            const { id } = req.params
            const first_name = req.body.first_name
            const family_name = req.body.family_name
            await Author.findByIdAndUpdate(id, {
                first_name: first_name,
                family_name: family_name
            })
            res.json({ msg: 'update' })
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    },
    deleteAuthor: async (req, res) => {
        try {
            const { id } = req.params
            await Author.findByIdAndDelete(id)
            res.json({ msg: 'Delete' })
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    }
}
module.exports = controllerAuthor