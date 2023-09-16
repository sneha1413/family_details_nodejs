const mongoose = require('mongoose')


const familySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true


    },
    age:{
        type:String,
        required:true

    },
    gender:{
        type:String,
        required:true,
        default:false
    }
}
   
)
module.exports = mongoose.model('pract',familySchema)