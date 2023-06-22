const express = require('express');
require('dotenv').config();
const cors = require('cors')
const routes = require("./routes/routes")

const app = express()

app.use(cors())
app.use(express.json());


//default route
app.get('/api', (req, res) => {
    res.json({message: 'Welcome dude'})
});

// register all routes
app.use("/api", routes)


// default to 500 if not able to catch
app.use((err, req, res, next) => {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});



const port = process.env.SERVER_PORT || 6000;
const host = '0.0.0.0';


app.listen(port, host, ()=> {
    console.log(`App started and running succesfully on PORT ${port}`)
})