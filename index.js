const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const todoRouters = require('./routes/todo')

const app = express()
const port = 3005
//middlewords
app.set('port', port)
app.use(express.json())
app.use('/api/todo', todoRouters)
app.get('/', (req, res) => {
    res.send('Todo list')
})

//app.post('/api/todo/create',controllerTodo.create)

mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => { console.log('conect to db') })
    .catch((err) => console.error(err))

app.listen(port, () => {
    console.log('listening on port ' + port)
})