const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    points:{
        type:Number
    },
    rank:{
        type:Number
    }
})


module.exports= mongoose.model("User",UserSchema)