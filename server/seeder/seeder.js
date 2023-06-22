const connection = require("../config/dbconfig").promise();
const Task = require("../models/Task");

async function createTaskTable() {
  try {
    
   await connection.query(`
        CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        createdAt DATETIME NOT NULL,
        updatedAt DATETIME NOT NULL,
        status ENUM('todo', 'in progress', 'done') NOT NULL
      );
    `);

   console.info("Table Task Created successfully")
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

async function seedTaskData() {
  const newTask = new Task(
    1,
    "Sunday word",
    "Just a description of Sunday work",
    new Date(),
    new Date(),
    "todo"
  ).toJSON()

  console.log(newTask)

  try {
    const [result] = await connection.query("INSERT INTO tasks SET ?", newTask);

    console.log(result)

    if (result.affectedRows === 1) {
      console.log("Task data seeded successfully.");
    } else {
      console.error("Failed to seed task data.");
    }
  } catch (error) {
    console.error("Error seeding task data:", error);
  }
}

// fuction call
createTaskTable()
  .then(() => seedTaskData())
  .catch((error) => console.error("Error:", error));
