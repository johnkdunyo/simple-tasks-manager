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





const port = process.env.SERVER_PORT || 6000;
const host = '0.0.0.0';


app.listen(port, host, ()=> {
    console.log(`App started and running succesfully on PORT ${port}`)
})