const User = require("../model/UserSchema");
const Product = require("../model/ProductSchema");
const bcryt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../model/UserSchema");
const Order = require("../model/OrderSchema");
const Register = async (req, res) => {
  try {
    const { name, email, pasword } = req.body;
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      res.status(400).json({ message: "User already exists,please login" });
    } else {
      const hashPW = await bcryt.hash(pasword, 10);
      console.log(hashPW);
      const user = await User.create({ name, email, pasword: hashPW });
      const token = await jwt.sign({ id: user._id,role:user.role }, process.env.JWT, {
        expiresIn: "5D",
      });
      res.status(201).json({ msg: "User created", token: token });
    
    }
  } catch (error) {
    res.status(500).json({ msg: "somthing went wrong /Register/".error });
  }
};
const login = async (req, res) => {
  try {
    const { email, pasword } = req.body;
    const existUser = await User.findOne({ email: email });
    if (!existUser) {
      res.status(400).json({ msg: "make sure to register first!" });
    } else {
      const verifyPasword = await bcryt.compare(pasword, existUser.pasword);
      if (!verifyPasword) {
        res.status(400).json({ msg: "wrong pasword,plz try again!" });
      } else {
        const token = await jwt.sign({ id: existUser._id,role:existUser.role }, process.env.JWT, {
          expiresIn: "5D",
        });
        res.status(200).json({ msg: "welcome"+existUser.name, token });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: "something went wrong/login/", error });
  }
};
const getProduct=async(req,res)=>{
  try {
      const Products=await Product.find()
      res.status(201).json({msg:"Get All Products",Products})
      
  } catch (error) {
      res.status(500).json({ msg: "something went wrong/UpdateProduct/", error });
      
  }
}
const createOrder=async(req,res)=>{
  try {
      const {userId,productList}=req.body
      const newOrder=await Order.create({products:productList,owner:userId})
      res.status(201).json({msg:"Send Order!",newOrder})
  } catch (error) {
      res.status(500).json({msg:"Sommething went Wrong /createOrder/",error})
  }
}
const getUserOrders=async(req,res)=>{
  try {
      const {userId}=req.body
      const UserOrders=await Order.find({owner:userId})
      res.status(200).json({msg:"Get all User Orders!",UserOrders})
  } catch (error) {
      res.status(500).json({msg:"Sommething went Wrong /getUserOrders/",error})
  }
}
module.exports = { Register, login,getProduct ,createOrder,getUserOrders};
