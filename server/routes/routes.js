const express = require("express");
const router = express.Router()



const { getTasks, getTask } = require("../controllers/taskController");

router.get('/task', getTasks);
router.get('/task/:id', getTask)



module.exports = router;
