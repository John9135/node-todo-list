const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const authorRouters = require('./routes/author')
const bookRouters = require('./routes/book')

const app = express()
const port = 3005
//middlewords
app.set('port', port)
app.use(express.json())
app.use('/api/author', authorRouters)
app.use('/api/book', bookRouters)

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

//app.post('/api/author/create',controllerAuthor.create)

mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => { console.log('conect to db') })
    .catch((err) => console.error(err))

app.listen(port, () => {
    console.log('listening on port ' + port)
})