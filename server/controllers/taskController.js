const connection = require("../config/dbconfig").promise()
const validatorErrorHandler = require('../utils/validatorErrorHandler')
const Task = require("../models/Task")


const getTasks = async(req, res, next) => {
    try {
        const [result] = await connection.query(
            'SELECT * FROM task'
        )

        if(result.length === 0) {
            return res.status(400).json({
                message: "No task found, please add a task"
            })
        }

        return res.status(200).json({
            message: "success",
            data: {
                tasks: result
            }
        })
    } catch (error){
        next(error)
    }
}



const getTask = async(req, res, next) => {
    console.log(req.params.id)
    try {
         const [result] = await connection.query(
            'SELECT * FROM task WHERE id = ?', [req.params.id]
        )

         if(result.length === 0) {
            return res.status(400).json({
                message: "No task found for the id passed"
            })
        }

        return res.status(200).json({
            message: "success",
            data: {
                task: result
            }
        })
    } catch (error) {
        next(error) 
    }
}

const addTask = async(req, res, next) => {
    validatorErrorHandler(req, res)
    try {
        const newTask = new Task(
            null,
            req.body.name,
            req.body.description,
            new Date(),
            new Date(),
            "todo"
        ).toJSON()

        const [result] = await connection.query("INSERT INTO task SET ?", newTask);

        if(result.affectedRows < 0) {
            return res.status(400).json({
                message: "Unable to add task, please try again"
            })
        }

        newTask.id = result.insertId
        return res.status(200).json({
                message: "task addded successfully",
                data: {
                    task: newTask 
                }
            })
    } catch (error) {
        next(error)
    }
}

const updateTask = async (req, res, next) => {
  validatorErrorHandler(req, res);
  try {
    const taskId = req.params.id; 

    const updatedTask = new Task(
      taskId,
      req.body.name,
      req.body.description,
      new Date(),
      new Date(),
      req.body.status
    ).toJSON();

    const [result] = await connection.query(
      'UPDATE task SET ? WHERE id = ?',
      [updatedTask, taskId]
    );

    if (result.affectedRows === 0) {
      return res.status(400).json({
        message: 'Unable to update task, please check the provided task ID',
      });
    }

    return res.status(200).json({
      message: 'Task updated successfully',
      data: {
        task: updatedTask,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id; 

    const [result] = await connection.query('DELETE FROM task WHERE id = ?', [taskId]);

    if (result.affectedRows === 0) {
      return res.status(400).json({
        message: 'Unable to delete task, please check the provided task ID',
      });
    }

    return res.status(200).json({
      message: 'Task deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};






module.exports = {getTasks, getTask, addTask, updateTask, deleteTask}