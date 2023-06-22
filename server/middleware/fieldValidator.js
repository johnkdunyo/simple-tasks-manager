const { body } = require('express-validator')


exports.validateAddTask = [
    body("name", "Please provide a name for the task")
        .notEmpty()
        .trim(),
    body("description", "Please provide a description for the task")
        .notEmpty()
        .trim(),
]

exports.validateUpdateTask = [
    body("name", "Please provide a name for the task")
        .trim(),
    body("description", "Please provide a description for the task")
        .trim(),
    body('status')
        .isIn(['done', 'todo', 'in progress'])
        .withMessage('Invalid status. Only "done" or "todo" allowed.'),
]