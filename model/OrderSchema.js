const mongoose=require('mongoose')

const OrderSchema=mongoose.Schema({
    CreateAt:{type:Date,
    default:new Date()
    },
    products:Array,
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
})

const Order=mongoose.model("orders",OrderSchema)
module.exports=Order