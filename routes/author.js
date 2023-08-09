const express = require('express')

const controllerAuthor = require('../controllers/author')

const router = express.Router()

router.post('/create', controllerAuthor.create)
router.get('/', controllerAuthor.getAuthors)
router.get('/:id', controllerAuthor.getAuthorsById)
router.patch('/update/:id', controllerAuthor.updateAuthor)
router.delete('/delete/:id', controllerAuthor.deleteAuthor)


module.exports = router