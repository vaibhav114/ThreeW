const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const connect = require('./database/mongo')
const UserRouter = require('./route/UserRoute')
const port = process.env.PORT || 5000
app.use(express.json())

app.use(cors())


app.use('/points', UserRouter);

app.get('/',(req,res)=>{
    return res.json({"MSG":"Get All Users EndPoint : /points/getalluser"})
})

const start = async ()=>{
    try {
        await connect(process.env.MONGO_URI) ;
        app.listen(port ,()=>{
            console.log(`Server Listening on Port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()