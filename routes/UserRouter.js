const express =require('express')
const {Register, login, getProduct, createOrder, getUserOrders}=require('../controllers/UserControllers')
const route=express.Router()
const User=require('../model/UserSchema')
const { UserMiddleware } = require('../authMiddleware/UserMiddleware')

route.post('/register',Register)
route.post('/login',login)
route.get('/getproducts',getProduct)
route.post('/createorder',UserMiddleware,createOrder)
route.get('/getuserorders',UserMiddleware,getUserOrders)

module.exports=route