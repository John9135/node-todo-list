const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    activity: {
        type: String,
        require: true,
        maxLength: 100
    },
})

module.exports = mongoose.model('Todo', TodoSchema)