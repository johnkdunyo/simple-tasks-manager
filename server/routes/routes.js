const express = require("express");
const router = express.Router()



const { getTasks, getTask, addTask } = require("../controllers/taskController");
const { validateAddTask } = require("../middleware/fieldValidator");

router.get('/task', getTasks);
router.get('/task/:id', getTask)
router.post('/task',  validateAddTask, addTask)



module.exports = router;
