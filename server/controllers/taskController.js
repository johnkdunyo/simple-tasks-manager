const connection = require("../config/dbconfig").promise()



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





module.exports = {getTasks, getTask}