const express=require('express');
const mongoose =require('mongoose')
const app=express();
const dotenv=require("dotenv")
dotenv.config()
const cors=require('cors')
const port =process.env.PORT||5000
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://adem:ademlejmi@cluster0.8eblnis.mongodb.net/newprojet?retryWrites=true&w=majority').then(()=> console.log('db connected')).catch(()=>console.log("problemconecting"))
app.use("/api/User",require('./routes/UserRouter'))
app.use("/api/admin",require('./routes/AdminRoutes'))
app.listen(port,(err)=>err? console.log(err):console.log("server listening on port :",port));
