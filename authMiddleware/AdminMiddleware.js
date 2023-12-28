const jwt=require("jsonwebtoken")
const AdminMiddleware=async(req,res,next)=>{
    try {
        const {token}=req.headers
        if(!token){
            res.status(400).json({msg:"you are not authorzied"})
        }
        else{
            const verifytoken=await jwt.verify(token,process.env.JWT)
            if(!verifytoken){
                res.status(400).json({msg:"you are not authorzied"})
            }
        else{
            if(verifytoken.role=="admin"){
                next()
            }
            else{
                res.status(400).json({msg:"you are not authorzied"})
            }
        } }
       
    } catch (error) {
        res.status(500).json({msg:"sommething went wrong/adminAuthMiddleware/",error})
    }

}
module.exports={AdminMiddleware}