const express = require("express");
const router = express.Router()



const { getTasks, getTask, addTask, updateTask, deleteTask } = require("../controllers/taskController");
const { validateAddTask, validateUpdateTask } = require("../middleware/fieldValidator");

router.get('/task', getTasks);
router.get('/task/:id', getTask)
router.post('/task',  validateAddTask, addTask)
router.put('/task/:id', validateUpdateTask, updateTask)
router.delete('/task/:id', deleteTask)



module.exports = router;
