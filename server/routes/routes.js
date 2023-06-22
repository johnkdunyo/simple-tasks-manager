const express = require("express");
const router = express.Router()



const { getTasks } = require("../controllers/taskController");

router.get('/task', getTasks);



module.exports = router;
