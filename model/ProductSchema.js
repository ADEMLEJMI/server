const mongoose=require('mongoose')


const ProductSchema=mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    poster:{type:String,required:true}
    })



    const Product=mongoose.model("products",ProductSchema)
    module.exports=Product
