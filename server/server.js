const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./db/connection')
require('dotenv').config({path:"./config.env"})

const port = process.env.PORT||5000

// const connect_url = 'mongodb+srv://emma:chimnadindu@learndev.4sdsu.mongodb.net/expenseTracker?retryWrites=true&w=majority';

 
//middleware
app.use(cors());
app.use(express.json())
//route
app.use(require('./routes/route'))



const start = async() => {
    try {
       await connectDB()
       app.listen(port, () => console.log(`LearnDev app listening on port ${port}!`))
        if (connectDB) {
     console.log('connected to MongoDB')
 }
    } catch (error) {
       console.log(error)
       
    }
 }
 
 start()