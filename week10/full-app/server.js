require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const URL = process.env.URL
const todoRoutes= require('./routes/todoroutes')
const mongoose= require('mongoose')
//allow other to acssess
const cors = require('cors')
app.use(cors())
app.use(express.json())
mongoose.connect(URL, {useNewUrlParser: true})
.then(()=>{console.log("mongoose is running")},
(error) =>{console.log(error)}
)
// prefix todos to routes
app.use('/todos', todoRoutes)

//listen on port
app.listen(PORT, () => console.log(`active on ${PORT}`))