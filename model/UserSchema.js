const mongoose=require('mongoose')
const userschema=mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true},
    pasword:{type:String,required:true},
    role:{type:String,
    enum:["user","admin"],
    default:"user"

}
    })
    const user=mongoose.model("user",userschema)
    module.exports=user
