const mysql = require("mysql2")
require("dotenv").config()


// create mysql connection 
const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

dbConnection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('Connection to database successfull with id ' + dbConnection.threadId + "running on port " + dbConnection.config.port);
  });




module.exports = dbConnection;