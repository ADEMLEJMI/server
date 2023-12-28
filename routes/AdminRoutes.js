const express =require('express')
const route=express.Router()
const {AddProduct,DeleteProduct,UpdateProduct, GetAllOrders,  }=require('../controllers/AdminControllers')
const {AdminMiddleware}=require('../authMiddleware/AdminMiddleware')
route.post('/addproduct',AdminMiddleware,AddProduct)
route.delete('/deleteproduct/:id',AdminMiddleware,DeleteProduct)
route.put('/updateproduct/:id',AdminMiddleware,UpdateProduct)
route.get('/getallorders',AdminMiddleware,GetAllOrders)
module.exports=route