const { body } = require('express-validator')


exports.validateAddTask = [
    body("name", "Please provide a name for the task")
        .notEmpty()
        .trim(),
    body("description", "Please provide a description for the task")
        .notEmpty()
        .trim(),
]