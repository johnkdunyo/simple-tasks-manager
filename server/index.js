const express = require('express');
require('dotenv').config();
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());

//defaut route
app.get('/', (req, res) => {
    res.json({message: 'Welcome dude'})
});



const port = process.env.PORT || 6000;
const host = '0.0.0.0';


app.listen(port, host, ()=> {
    console.log(`App started and running succesfully on PORT ${port}`)
})