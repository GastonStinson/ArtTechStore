const express = require('express');
const taskController = require('../controllers/tasksController')


const router = express.Router();


router.get('/:id',taskController.obtenerTasks)
router.post('/crear', taskController.crearTask)
router.delete('/delete/:id', taskController.deleteTask)
router.put('/:id',taskController.completeTask)

module.exports = router