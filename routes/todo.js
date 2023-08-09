const express = require('express')

const controllerTodo = require('../controllers/todo')

const router = express.Router()

router.post('/create', controllerTodo.create)
router.get('/', controllerTodo.getTodo)
router.get('/:id', controllerTodo.getTodoById)
router.patch('/update/:id', controllerTodo.updateTodo)
router.delete('/delete/:id', controllerTodo.deleteTodo)


module.exports = router